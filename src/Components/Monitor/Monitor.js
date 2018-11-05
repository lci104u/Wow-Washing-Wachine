import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StatusCard from '../Dashboard/StatusCard';
import Grid from '@material-ui/core/Grid';
import placeData from '../../placeData';
import { Redirect } from 'react-router-dom';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    paddingTop: 20,
    paddingBottom: 20,
  }
})

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
  }
  render() {
    const match = this.props.match.params.place;
    const place = [...placeData.under, ...placeData.graduate].find((data) => data.id === match);
    if(place == null) return <Redirect to='/'/>
    return (
      <div className={this.classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>{place.name}</Typography>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={10} >
            <StatusCard name={place.name}/>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);