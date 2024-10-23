import  { NextConfig } from "next";

const NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            pathname: '/**', 
          },
        ],
      },
};

export default NextConfig;
