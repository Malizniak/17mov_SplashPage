import type { NextConfig } from "next";

const isGithubPages = process.env.IS_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: isGithubPages ? "/7mov_SplashPage" : "",
    assetPrefix: isGithubPages ? "/7mov_SplashPage" : "",
};

export default nextConfig;
