import React from 'react';
import Menu from './Menu/Menu.js';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BrowseView from './Browse/BrowseView.js'
import ProfileView from './Profile/ProfileView.js'
import AddView from './Add/AddView.js'
import LikedView from './Liked/LikedView.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const client = new ApolloClient({
  uri: "https://how-do-i-gql.herokuapp.com/v1/graphql"
});

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <div className={classes.root}>
        <HashRouter>
          <Menu></Menu>

          <Route path="/" exact />
          <Route path="/Browse" component={BrowseView} />
          <Route path="/Profile" component={ProfileView} />
          <Route path="/Liked" component={LikedView} />
          <Route path="/Add" component={AddView} />
        </HashRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
