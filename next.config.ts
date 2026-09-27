import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sends anyone using the old privacy link to the single policy page.
  // permanent: true = 308 redirect, so search engines update their links too.
  async redirects() {
    return [{ source: "/revlink/privacy", destination: "/privacy", permanent: true }];
  },
};

export default nextConfig;
