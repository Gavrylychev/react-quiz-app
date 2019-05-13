import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  }
});

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const ButtonSubmit = ({ onInputSubmit, classes }) => {
  return (
      <MuiThemeProvider theme={theme}>
        <Button 
          variant="contained" 
          color="primary"
          type="submit"
          alt="clear all answers" 
          className={classes.button}
          onClick={onInputSubmit}
          >
          Submit
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </MuiThemeProvider>
  )
}

ButtonSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSubmit);
