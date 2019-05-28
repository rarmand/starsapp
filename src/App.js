import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


function App() {
  return (
    <Grid container className="root">
        <Container className="main">
            <Grid container className="header">Star Wars App</Grid>
            <Grid container className="mainlayout">
                <Typography variant="h5" gutterBottom>
                    Employees list
                </Typography>

            </Grid>
        </Container>
    </Grid>
  );
}

export default App;
