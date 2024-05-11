import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Arash Altafi',
        short_name: 'Arash Altafi',
        description: 'Arash Altafi Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8f8f8',
        theme_color: '#f8f8f8',
        icons: [
            {
                src: '/images/arash.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}