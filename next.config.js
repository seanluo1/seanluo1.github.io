const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'seanluo1.github.io'; // Your repo name

const nextConfig = {
  output: 'export', // static export 'out/' for gh-pages when running `npm run build`
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;
