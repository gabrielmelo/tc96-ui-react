import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', 'src/styles/index.css'],
	format: ['cjs', 'esm'],
	outDir: 'dist',
	clean: true,
	dts: true,
	minify: true,
	sourcemap: true,
	tsconfig: 'tsconfig.build.json',
})
