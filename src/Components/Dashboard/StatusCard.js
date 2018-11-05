import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
    height: 100,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flex: '1 0 auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class StatusCard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
    this.theme = this.props.theme;
    this.total = this.props.total;
    this.state = {
      completed: 80,
      vacant: this.props.vacant,
    }
  }
  // componentDidMount() {
  //   this.timer = setInterval(this.progress, 500);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  // progress = () => {
  //   const { completed } = this.state;
  //   this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  // };
  render(){
    return ( 
      <Card className={this.classes.card}>
        <div className={this.classes.details}>
          <CardContent className={this.classes.content} style={{paddingBottom: '16px'}}>
            <Typography variant="h5" >
              {this.props.name}
            </Typography>
          </CardContent>
        </div>
        {/* <CircularProgress
          className={this.classes.progress}
          color="secondary"
          variant="static"
          size={50}
          value={this.state.completed}
        /> */}
      </Card>
    );
  }
}

StatusCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(StatusCard);