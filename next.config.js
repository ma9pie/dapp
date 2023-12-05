const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = withTwin(nextConfig);
