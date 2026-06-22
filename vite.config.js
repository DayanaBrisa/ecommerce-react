// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Silencia todo lo que venga de node_modules
        logger: {
          warn: () => {} // ¡Esta línea destruye y borra cualquier Warning de la consola!
        }
      }
    }
  }
})