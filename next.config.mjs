/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  experimental: {
    turbo: {
      resolveAlias: {
        'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      },
    },
  },
};

export default nextConfig;
