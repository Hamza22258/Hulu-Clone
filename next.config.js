/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "img.tmdb.org",
      "www.logo.wine",
      "image.tmdb.org",
    ],
  },
};

module.exports = nextConfig;
