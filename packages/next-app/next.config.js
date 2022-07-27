const HotExport = require('unplugin-hot-export')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, _) => {
    config.plugins.push(HotExport.webpackPlugin())
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
