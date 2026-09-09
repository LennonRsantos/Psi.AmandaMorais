import type { NextConfig } from "next";

const repoName = "Psi.AmandaMorais";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : "",
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
