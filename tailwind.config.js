module.exports = {
  theme: {
    colors: {
      // https://www.happyhues.co/palettes/17
      // sand: '#f3d2c1',
      // 'sand-light': '#fef6e4', // elements background
      // pink: '#f582ae', // elements button
      // navy: '#001858', // elements button text
      // 'navy-light': '#172c66', // elements paragraph
      // teal: '#8bd3dd', // illustration secondary 
      // white: '#fff', // white
      // sand: '#f3d2c1',
      // --
      // https://www.happyhues.co/palettes/15
      'sand-light': '#faeee7', // elements background
      pink: '#ff8ba7', // elements button
      navy: '#33272a', // elements button text
      'navy-light': '#594a4e', // elements paragraph
      teal: '#ffc6c7', // illustration secondary 
      white: '#fffffe', // white
    },
    fontFamily: {
      inter:
        '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'inter-var':
        '"Inter var", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      optician:
        '"Optician Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 2px #f582ae',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
    customForms: theme => ({
      default: {
        'checkbox, input, multiselect, radio, select, textarea': {
          '&:focus': {
            borderColor: theme('colors.blue.500'),
            boxShadow: theme('boxShadow.outline'),
          },
        },
        'checkbox, radio': {
          '&:checked': {
            backgroundColor: theme('colors.blue.500'),
          },
        },
        'input, multiselect, select, textarea': {
          width: theme('width.full'),
        },
      },
    }),
  },
  variants: {
    margin: ['responsive', 'last'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
