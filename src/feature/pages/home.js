import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Home(){
    const classes = useStyles();
    return(
    //     <React.Fragment>
    //     <CssBaseline />
    //     <Container maxWidth="sm">
    //       <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    //     </Container>
    //   </React.Fragment>
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nitheesh
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}