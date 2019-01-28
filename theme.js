import theme from 'mdx-deck/themes'
export { big as theme } from 'mdx-deck/themes'

const blue = '#0af'

export default {
    ...theme,
    fontSizes: [ 16, 24, 32, 48, 64, 96, 128 ],
    font: '"Bowlby One SC", sans-serif',
    colors: {
      text: '#dff',
      background: '#011',
      blue,
      link: blue,
      pre: blue,
      preBackground: '#000',
      code: blue,
    },
    heading: {
      fontWeight: 600
    },
    quote: {
      fontWeight: 600
    }

    // css: {
    //   ...theme.css,
    //   '& pre': {
    //     background: '#000 !important',
    //   },
    //   textAlign: 'left',
    //   '& .Slide': {
    //     width: '100%',
    //     alignItems: 'flex-start'
    //   }
    // },
    // heading: {
    //   fontFamily: lobster,
    //   fontWeight: 400
    // },
    // p: {
    //   fontFamily: monospace,
    //   fontSize: '1em'
    // },
    // li: {
    //   fontFamily: monospace,
    //   fontSize: '0.5em',
    //   lineHeight: '1.5'
    // },
    // link: {
    //   textDecoration: 'none',
    //   '&:hover': {
    //     textDecoration: 'underline',
    //   }
    // },
    // blockquote: {
    //   fontSize:
    // }
  }