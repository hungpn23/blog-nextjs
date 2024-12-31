import { NextConfig } from "next";
import { BASE_URL } from "./lib/constants";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // experimental: {
  //   authInterrupts: true,
  // },
};

export default nextConfig;
