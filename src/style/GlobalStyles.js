import { createGlobalStyle } from 'styled-components';
import { theme } from '../themes';

const GlobalStyles = createGlobalStyle`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
   color: ${theme.colors.txtColor};
   background: ${theme.colors.bgBodyColor};
   max-width: 1250px;
   margin: 0 auto;
}

label {
  margin-bottom: 5px;
  display: inline-block;
}

h2 {
  font-size: 30px;
  padding-bottom: 20px;}

.btn-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  td {
    padding: 10px;
    text-align: center;
  }

  
  



`;

export default GlobalStyles;
