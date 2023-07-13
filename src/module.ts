export async function start(): Promise<string> {
	return Promise.resolve('async workink');
}

start().then(console.log);
