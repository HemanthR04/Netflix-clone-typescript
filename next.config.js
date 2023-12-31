/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns:[
            {
                protocol:'https',
                hostname:"image.tmdb.org",
                port:"",
            },
            {
                protocol:'https',
                hostname:"res.cloudinary.com",
                port:"",
            }
        ]
    }
}

module.exports = nextConfig
