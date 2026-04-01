import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'    // <-- ADD THIS
 
export default defineConfig({
  plugins: [react(), tailwindcss()],   
  base: 'zhenhan2233-hash/sportsproject'     	// <-- ADD 
})
