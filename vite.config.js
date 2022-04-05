const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'useRemValue',
      fileName: (format) => `use-rem-value.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
