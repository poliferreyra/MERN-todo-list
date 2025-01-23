import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Habilita soporte para Styled Components
  },
};

export default nextConfig;
