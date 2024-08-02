/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites(){
        return [
            {
                source: "/api/:path*",
                destination: "http://makeup-api.herokuapp.com/api/:path*"
            }
        ];
    }
};

export default nextConfig;
