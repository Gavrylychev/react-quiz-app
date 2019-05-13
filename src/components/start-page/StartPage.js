import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
  });
  

// getData = () => {

// }

const StartPage = ({ classes }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-auto text-center">
        <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
                Hello, in order to start the test, click this button
            </Typography>
            <Link to='/questionslist' style={{ textDecoration: "none" }}>
                <Button variant="contained" 
                  // onClick={getData} 
                  className={classes.button}>
                    start
                </Button>
            </Link>
        </Paper>
      </div>
    </div>
  )
}

StartPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(StartPage);