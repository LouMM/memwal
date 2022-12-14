delete process.env.TS_NODE_PROJECT

import * as webpack from 'webpack';
import * as fs from "fs";
import { WebpackOptionsNormalized } from 'webpack';
import { ProcessEnvOptions } from 'child_process';
import * as path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import lodash from 'lodash';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

interface Configuration extends webpack.Configuration, DevServerConfiguration { }

interface procenv {
    [key: string]: string | undefined;
}

var normalizedOptions: webpack.WebpackOptionsNormalized;

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

const commonConfig: Configuration = {
    devtool: isEnvDevelopment ? 'source-map' : false,
    mode: isEnvProduction ? 'production' : 'development',
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, "dist"),
        globalObject: "this"
    },
    resolve: {
        alias: {
            main: path.resolve(__dirname, './src/main')
            , public: path.resolve(__dirname, './src/public')
            , renderer: path.resolve(__dirname, './src/renderer')
            , model: path.resolve(__dirname, './src/model')
        },
        //Add resolving for ts and tsx extensions
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: ["node_modules", resolveApp("node_modules")],
        fallback: {
            "fs": false, "path": false, "os": false
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            //All files that have ts/tsx should be handled by the ts-loader
            { test: /\.tsx?$/, loader: "ts-loader" }
            , {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            }
        ]
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },

        port: process.env.npm_package_config_dev_server_port || 3001
    }

}

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = './src/main.tsx';
rendererConfig.target = 'web';
if (rendererConfig.output)
    rendererConfig.output.filename = 'main.bundle.js';
rendererConfig.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
    }),
    new webpack.ProvidePlugin({
        "React": "react",
    })
];
//https://github.com/Devtography/electron-react-typescript-webpack-boilerplate/blob/master/package.json

module.exports = [rendererConfig];