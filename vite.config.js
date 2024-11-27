import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    define: {
        'process.env': {},
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process': {
            'env': {},
            'version': JSON.stringify(process.version)
        }
    },
    build: {
        sourcemap: false,
        emptyOutDir:true,
        lib: {
            entry: path.resolve(__dirname, 'public/sdk.js'),
            name: 'paypal',
            fileName: (format) => `sdk.${format}.js`,
            formats: ['umd', 'es']
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                globals: {
                    process: 'process'
                },
                preserveModules: false,
                assetFileNames: '[name][extname]',
                chunkFileNames: '[name].js',
                entryFileNames: 'sdk.[format].js'
            }
        }
    }
});