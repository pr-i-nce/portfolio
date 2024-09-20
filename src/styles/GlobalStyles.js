import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #ff6ec4 0%, #7873f5 100%);
    color: white;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff6ec4;
    border-radius: 5px;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #ff47b6;
  }
`;

export default GlobalStyles;
