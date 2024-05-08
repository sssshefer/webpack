import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template:paths.html}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),

    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        //Separate type checking to another process and decrease build time
        new ForkTsCheckerWebpackPlugin()
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    if(analyzer){
        plugins.push(new BundleAnalyzerPlugin())

    }
    return plugins;
}