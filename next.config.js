/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		nftTracing: true
	},
	serverRuntimeConfig: {
		PROJECT_ROOT: process.cwd()
	}
};
