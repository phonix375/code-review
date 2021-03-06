
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Container from 'react-bootstrap/Container'

import Navigation from "./components/navBar/navBar";
import React from "react";
import { StoreProvider } from "./utils/GlobalState";
import Home from "./pages/home"
import ProjectPage from "./pages/project"
import Personal from './pages/personal'
import Footer from './components/footer/footer'
import DonationPage from './pages/donate'



import backgroundvid from "./assets/backgroundLoop.mp4";


//react icons stuff
//end of react icons tuff 



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {

  return (

    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>

      <Navigation></Navigation>
        <Container className="footerpad">
          <video autoPlay loop muted 
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            objectFit: "cover",
            // transform: "translate(-50%, -50%)",
            zIndex: "-1",
            backgroundRepeat: "repeat-y"
          }}>
            <source src={backgroundvid} type="video/mp4"/>
          </video>
  
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/personal" component={Personal} />
            <Route exact path="/project/:id" component={ProjectPage} />
            <Route exact path="/donations" component={DonationPage} />
            </Switch>
          
        </Container>
        <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>

  );
}


export default App;
