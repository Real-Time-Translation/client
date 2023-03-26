import { createProxyMiddleware } from 'http-proxy-middleware';

export const useProxy = (app)  => {
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: import.meta.env.VITE_SERVER_HOST,
      changeOrigin: true,
      secure: false,
    }),
  );
}
