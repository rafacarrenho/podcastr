// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  future: {
    webpack5: true
  },
  images: {
    domains: ['storage.googleapis.com']
  }
}
