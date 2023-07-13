import { BuildOptions } from './types/config';
import { Configuration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
	return {
		port: options.port,
		hot: options.isDev,
	};
}