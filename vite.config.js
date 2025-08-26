import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import dotenv from 'dotenv';

dotenv.config();

const keyPath = process.env.SSL_KEY_PATH;
const certPath = process.env.SSL_CERT_PATH;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 443,
    host: true,
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    }
  }
})
