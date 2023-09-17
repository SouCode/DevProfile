import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(
    '/api/contributions',
    createProxyMiddleware({
      target: 'https://github-contributions-api.vercel.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api/contributions': '/v1/SouCode',
      },
    })
  );
};
