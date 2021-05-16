import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Forms/Form.js";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
         <Typography className={classes.heading} variant="h3" align="center">Polaroid</Typography>
      </AppBar>
      <Grow in>
        <Container>
           <Grid container justify="Space-between" alignItems="stretch" spacing={3}>
               <Grid item xs={12} sm={7}>
                    <Posts />
               </Grid>
               <Grid item xs={12} sm={4}>
                    <Form />
               </Grid>
           </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
