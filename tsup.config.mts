import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts', 'src/lib/index.ts'],
	format: ['cjs', 'esm'],
	outDir: 'dist',
	clean: true,
	dts: true,
	minify: true,
	sourcemap: true,
	tsconfig: 'tsconfig.build.json',
})
