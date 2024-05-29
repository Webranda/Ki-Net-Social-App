import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Enable Vite's built-in server and configure its options
  server: {
    // Set the host and port for the development server
    host: 'localhost',
    port: 3000,
    // Enable HTTPS for the development server (optional)
    https: false,
    // Enable hot module replacement (optional)
    hmr: {
      overlay: false,
    },
  },
  // Configure Vite's build options
  build: {
    // Set the output directory for the production build
    outDir: 'dist',
    // Enable minification for the production build (optional)
    minify: true,
    // Enable source maps for the production build (optional)
    sourcemap: true,
    // Configure the rollup options for the production build
    rollupOptions: {
      // Enable tree-shaking for the production build (optional)
      treeshake: true,
    },
  },
  // Configure Vite's resolve options
  resolve: {
    // Set the extensions to be resolved by default
    extensions: ['.js', '.jsx', '.json', '.mjs'],
    // Enable aliasing for module names (optional)
    alias: {
      // Example: Map the 'components' directory to a custom alias
      '@components': '/path/to/components',
    },
  },
  // Configure Vite's optimize options
  optimizeDeps: {
    // Enable tree-shaking for external dependencies (optional)
    include: ['lodash-es', 'moment'],
  },
  // Enable Vite's watch options
  watch: {
    // Enable watch mode for the development server (optional)
    open: true,
    // Enable watch mode for the production build (optional)
    build: false,
  },
});