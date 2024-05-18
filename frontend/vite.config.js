import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [react(),tailwindcss()],
}