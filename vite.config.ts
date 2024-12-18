import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000,
		open: true
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, 'src/lib')
		}
	}
});
