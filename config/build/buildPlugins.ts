import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	return [
		new ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
			minify: {
				removeComments: !isDev,
				collapseWhitespace: !isDev,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		// плагин для копирования файлов
		new CopyPlugin({
			patterns: [
				// копируем фавикон из паблика в папку с index.html
				{
					from: 'public/favicon.ico',
					to: '',
				},
			],
		}),
	];
}
