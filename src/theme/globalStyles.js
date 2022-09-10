import { createGlobalStyle } from 'styled-components'

import theme from '@/theme/theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.applicationBg};
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

`
