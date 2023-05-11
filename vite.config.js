// vite.config.js
export default {
  build: {
    minify: true,
    outDir: 'dist',
    assetsInlineLimit: 4096,
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // Add this option to compress images
    compress: {
      // Specify the level of compression you want to apply
      // 0 is the lowest level of compression and 9 is the highest level of compression
      level: 9,
      // Specify the file types you want to compress
      filetypes: ['jpg', 'jpeg', 'png', 'svg'],
    },
  },
};