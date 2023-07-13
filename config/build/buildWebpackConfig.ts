import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode: 'development',
		// тут задаётся контекст, где будут искаться файлы в дальнейших свойствах
		context: paths.context,
		// тут можно не писать path.resolve и искать файл по абсолютному пути, так как задан контекст
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
