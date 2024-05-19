import withPWAInit from "@ducanh2912/next-pwa";
import withPWA from "next-pwa";

// https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
// npm i @ducanh2912/next-pwa 
// npm i -D webpack

// https://github.com/shadowwalker/next-pwa
// https://www.npmjs.com/package/next-pwa
// npm i next-pwa

const pwa = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
//   scope: '/app',
//   sw: 'service-worker.js',
//   fallbacks: {
//       document: '/offline',
//   },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        MY_NAME: "ArashAltafi",
    }
};

export default pwa(nextConfig);