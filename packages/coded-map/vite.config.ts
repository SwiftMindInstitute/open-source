import { readFileSync } from 'fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const name = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf8' })
).name.replace(/(^[^\/]*\/)/, '')

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: name,
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
  },
})
