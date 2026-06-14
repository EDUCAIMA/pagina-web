/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vx-base':     '#FAFAFF',   // fondo principal
        'vx-surface':  '#FFFFFF',   // tarjetas y paneles
        'vx-elevated': '#F2F2FA',   // secciones alternas / cabeceras de card
        'vx-border':   '#E4E4F0',   // todos los bordes (0.5px)
        'vx-brand':    '#2F69E2',   // azul primario
        'vx-accent':   '#431E7D',   // violeta acento
        'vx-text':     '#211C42',   // texto principal (nunca negro puro)
        'vx-muted':    '#6B6585',   // texto secundario
        'vx-dim':      '#9B98AE',   // texto atenuado / captions
        'vx-success':  '#16A34A',   // SOLO estados "completado"
        'vx-warning':  '#D97706',
        'vx-danger':   '#DC2626',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(33,28,66,0.06)',
        'card-hover': '0 4px 12px rgba(33,28,66,0.10)',
      },
    },
  },
  plugins: [],
}
