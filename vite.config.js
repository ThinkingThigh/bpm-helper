import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  // build: build production; preveiw: serve production; dev: serve development;
  console.log("command&mode", command, mode);
  return {
    build: {
      // lib: {
      //   // entry: "./lib/main.js",
      //   entry: "./lib/utils/bpmHelper.js",
      //   // entry: "./public/js/index.js",
      //   name: "index",
      //   fileName: "index",
      // },
      assetsDir: "js",
      // rollupOptions: {},
    },
    server: {
      open: "index.html",
      port: 80, // sudo lsof -i tcp:80 查看占用 PID, kill -9 PID 强制终止
      strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      proxy: {
        // https://github.com/http-party/node-http-proxy#options
      },
    },
  };
});
