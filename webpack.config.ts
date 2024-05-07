import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
type Mode = 'production' | 'development';

interface EnvVariables {
    mode:Mode,
    port:number
}

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        //path is needed to support different operating systems
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            isDev ? new webpack.ProgressPlugin() : undefined,
            !isDev ? new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename:'css/[name].[contenthash:8].css',
            }):undefined
        ],
        module: {
            rules: [
                //order of rules is important
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev ?'style-loader':MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map':false,
        devServer: isDev? {
            port: env.port ?? 5000,
            open: true,
        }:undefined

    }
return config
}