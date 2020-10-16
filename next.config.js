const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cspRules = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data:",
  "font-src 'self' https://fonts.gstatic.com",
].join('; ');

module.exports = withCSS({
  webpack(config) {
    config.optimization.minimizer = config.optimization.minimizer || [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
  async headers() {
    const headers = [
      {
        key: 'X-Frame-Options',
        value: 'deny',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
    ];

    if (process.env.NODE_ENV === 'production') {
      headers.push({
        key: 'Content-Security-Policy',
        value: cspRules,
      });
    }

    return [
      {
        source: '/',
        headers,
      },
    ];
  },
});
