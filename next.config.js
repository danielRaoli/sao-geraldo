/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de acessibilidade
  experimental: {
    // Outras configurações experimentais podem ser adicionadas aqui
  },
  
  // Configurações de imagem para melhor acessibilidade
  images: {
    // Formatos de imagem otimizados (apenas webp e avif são suportados)
    formats: ['image/webp', 'image/avif'],
    // Tamanhos de dispositivo para responsividade
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Tamanhos de imagem para diferentes breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers de segurança e acessibilidade
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Header para suporte a tecnologias assistivas
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Configurações de compilação
  compiler: {
    // Remove console.logs em produção
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configurações de webpack para otimizações
  webpack: (config, { dev, isServer }) => {
    // Otimizações para acessibilidade em produção
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        accessibility: {
          name: 'accessibility',
          test: /[\\/]node_modules[\\/](react-aria|@react-aria|@headlessui)[\\/]/,
          chunks: 'all',
          priority: 30,
        },
      }
    }
    
    return config
  },
}

module.exports = nextConfig