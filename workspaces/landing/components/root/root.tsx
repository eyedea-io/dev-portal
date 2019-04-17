import React from 'react'
import {hot} from 'react-hot-loader'
import {SmashingThemeProvider} from '@smashing/theme'
import Landing from '@landing/pages/landing'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Document
    ========================================================================== */

  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */

  html {
    line-height: 1.15; /* 1 */
    text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    body {
      padding: 1em;
    }
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  a {
    background-color: transparent;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [hidden] {
    display: none;
  }
`

const Root: React.FC = () => (
  <SmashingThemeProvider
    theme={{
      defaults: {
        button: {
          height: 40,
          appearance: 'flat'
        },
        textInput: {
          height: 40
        }
      }
    }}
  >
    <React.Fragment>
      <Landing />
      <GlobalStyle />
    </React.Fragment>
  </SmashingThemeProvider>
)

export default hot(module)(Root)
