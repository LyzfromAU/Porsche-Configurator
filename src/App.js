import React from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import { models, interior, color, wheel } from './Data';
import Footer from './components/Footer';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark'?'#3b3231':'#EEE'};
  color: ${props => props.theme.mode === 'dark'?'#EEE':'#3b3231'};
}
`

function App() {
  const theme = useSelector(state=>state.theme);
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <>
        <GlobalStyle />
        <Menu />
        <Content data={models} interior={interior} color={color} wheel={wheel}/>
        <Footer data={models} interior={interior} color={color} wheel={wheel}/>
      </>
    </ThemeProvider>
  );
};
export default App;
