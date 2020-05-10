import React from 'react';
import Menu from './Menu.js';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu></Menu>
      <Container className={classes.content}>
        <h1>aaa</h1>
      </Container>
    </div>
  );
}

export default App;
