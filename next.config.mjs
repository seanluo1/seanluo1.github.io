const nextConfig = {
  output: 'export', // static export 'out/' for gh-pages when running `npm run build`
  images: {
    unoptimized: true, // required for static sites
  },
};

export default nextConfig;
