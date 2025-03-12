import path from 'path';
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development', // Or 'production' for optimized build
    entry: {
        cart: './components/cart/cart.js',
        checkout: './components/cart/checkout.js',
        form: './components/form/form.js',
        navBar: './components/navBar/navBar.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv()
    ]
};