// src/styles/fonts.ts

import { css } from 'styled-components';

const brandFont = css`
  @font-face {
    font-family: 'Inter-Regular';
    src: url('/fonts/InterTight-SemiBold') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`

const logoFont = css`
  @font-face {
    font-family: 'Inter-Bold-Italic';
    src: url('/fonts/InterTight-BlackItalic') format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`;

const headerFont = css`
  @font-face {
    font-family: 'Inter-Regular';
    src: url('/fonts/Inter-Regular.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;

export { brandFont, logoFont, headerFont };
