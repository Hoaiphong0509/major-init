/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
	reactStrictMode: false,
	pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
	swcMinify: false,
	i18n,
	images: {
		domains: ['he44r2a3tgobj.vcdn.cloud', 'lh3.googleusercontent.com']
	},
	optimizeFonts: true
}

module.exports = nextConfig
