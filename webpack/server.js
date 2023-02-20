const devServer = {
  host: "localhost",
  port: 3000,
  hot: true,
  open: false,
  compress: true,
  liveReload: true,
  static: ["public"],
  historyApiFallback: true, // 404response를 받게 되도 index.html로 보내준다.
  client: {
    logging: "info",
    overlay: true,
    reconnect: 3,
  },
  watchFiles: {
    paths: ["src/**/*.*", "public/**/*.*"],
  },
};

export default devServer;
