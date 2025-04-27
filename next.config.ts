// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin(
  './app/i18n/request.ts',
);
export default withNextIntl(nextConfig);
