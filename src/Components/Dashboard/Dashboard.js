import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import StatusCard from './StatusCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import placeData from '../../placeData';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  link: {
    textDecoration: 'none',
  },
})

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
    this.cards = [...placeData.under, ...placeData.graduate].map((data, index) => (
      <Link to={`/${data.id}`} className={this.classes.link} key={`card_${data.id}`}>
        <StatusCard name={data.name}/>
      </Link>
    ));
  }
  
  render() {
    
    return (
      <div className={this.classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>整體狀態</Typography>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={10} >
            {this.cards}
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Dashboard);