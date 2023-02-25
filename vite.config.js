import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'Counter',
      fileName: 'counter'
    }
  },
  server: {
    open: '/dist/counter.js',
    port: 80, // sudo lsof -i tcp:80 查看占用, kill -9 PID 强制终止
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
  }
})