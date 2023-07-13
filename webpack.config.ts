import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv): Configuration => {
	const paths: BuildPaths = {
		entry: './index.ts',
		build: path.resolve(__dirname, 'build'),
		context: path.resolve(__dirname, 'src'),
		html: 'public/index.html',
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;

	return buildWebpackConfig({ mode, paths, isDev, port: PORT });
};
