import { resolve } from 'node:path';
import { loadEnv, type Plugin } from 'vite';
import { checker } from 'vite-plugin-checker';
import { defineConfig } from 'vitest/config';

export default ({ mode }: { mode: 'production' | 'development' | 'test' }) => {
  const ENV = { ...process.env, ...loadEnv(mode, 'env', '') };

  return defineConfig({
    envDir: 'env',
    server: { host: 'localhost', port: +(ENV.VITE_PORT || 3000) },
    build: {
      ssr: true,
      target: 'node18',
      sourcemap: true, // For debugging production build
      minify: true,
      rollupOptions: { input: 'src/server.ts', output: { entryFileNames: 'server.js', inlineDynamicImports: true } },
    },
    plugins: [
      checker({ typescript: true, overlay: false, enableBuild: true }), // TypeScript type checking
      mode === 'development' &&
        ({
          configureServer: ({ middlewares, ssrLoadModule }) => {
            middlewares.use(async (q, s) => (await ssrLoadModule('src/server')).app(q, s));
          },
        } as Plugin), // Dev Server: Hot module reload
    ].filter(Boolean),
    resolve: { alias: { '@': resolve(__dirname, './src') } },
    test: {
      globals: true,
      include: ['./src/**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      coverage: { reporter: ['text', 'lcov'] },
    },
  });
};
