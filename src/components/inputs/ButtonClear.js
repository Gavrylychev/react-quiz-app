import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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

const ButtonClear = ({ onInputClear, classes }) => {
  return (
    <Button 
      variant="contained" 
      type="button" 
      color="secondary"
      onClick={onInputClear} 
      className={classes.button}>
      Clear All
      <DeleteIcon className={classes.rightIcon} />
    </Button>
  )
}

ButtonClear.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ButtonClear);