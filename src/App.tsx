import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Service from "./screens/service/Service";
import { Provider } from "react-redux";
import store from "./store/store";

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
    </Provider>
  );
}

export default App;
