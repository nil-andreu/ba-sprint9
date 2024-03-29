import PrincipalPage from './components/principalPage/PrincipalPage'
import LoginPage from './components/login/LoginPage'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import logo from "./assets/logo.svg";
import styled from 'styled-components'





function App() {
  return (
    <Router>
      <Header>
        <Image src={logo} />
      </Header>

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/starships/">
          <PrincipalPage />
        </Route>
          
      </Switch>
    </Router>
  );
}


const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #000;
`;

const Image = styled.img`
  justify-self: center;
  height: 19vh;
`;

export default App;
