import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production',
    entry: {
        cart: './components/cart/cart.js',
        checkout: './components/cart/checkout.js',
        form: './components/form/form.js',
        navBar: './components/navBar/navBar.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var', // Expose each bundle as a global variable
        library: '[name]Bundle',
    },
    target: 'web',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // You might need to install and configure Babel if you're using ES6+ features
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};