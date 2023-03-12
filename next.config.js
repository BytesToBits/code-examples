/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		nftTracing: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	serverRuntimeConfig: {
		PROJECT_ROOT: process.cwd()
	}
};
