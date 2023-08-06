/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This can be done while temporary maintenance or permanent redirect
  redirects: () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
