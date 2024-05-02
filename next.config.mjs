import withPWA from "next-pwa";

const pwa = withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    fallbacks: {
        document: '/offline',
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
};

export default pwa(nextConfig);