import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Nav from "nav/Nav";
import HotelBooking from "nav/HotelBooking";
import FlightBooking from "footer/FlightBooking";
import Footer from "footer/Footer";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  // const NavHeader = React.lazy(() => import('nav/Nav'));
  // <React.Suspense fallback='Loading header'>
  //   <Nav />
  //   <FlightBooking />
  //   <HotelBooking />
  //   <Footer />
  // </React.Suspense>
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}><Nav /></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}><FlightBooking /></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}><HotelBooking /></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}><Footer /></Paper>
      </Grid>
    </Grid>
  );
}
