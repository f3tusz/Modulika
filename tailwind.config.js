module.exports = {
  content: [
    './dist/*.{html,js}',
    './dist/programas-academicos/index.html',
    './dist/programas-academicos/administracion/index.html'
  ],
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
        xl: '0'
      },
    },
    fontFamily: {
      'display': ['"Cinzel", serif'],
      'sans': ['"Poppins", sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1.2rem',
      'lg': '1.5rem',
      'xl': '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
      '5xl': '4rem'
    },
    spacing: {
      '0': '0',
      'px': '1px',
      '1': '10px',
      '2': '20px',
      '3': '30px',
      '4': '40px',
      '5': '50px',
      '6': '60px',
      '7': '70px',
      '8': '80px',
      '9': '90px',
      '10': '100px'
    },
    extend: {
      colors: {
        'black': '#000000',
        'verde': '#00FFA8',
        'naranja': '#FF4A00',
      }
    }
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          /*'@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '90%',
          },*/
          '@screen lg': {
            maxWidth: '1340px',
          }/*,
          '@screen xl': {
            maxWidth: '1200px',
          },*/
        }
      })
    }
  ],
}