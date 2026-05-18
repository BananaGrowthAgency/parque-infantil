/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/billetterie/anniversaire",
        destination: "/anniversaire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
