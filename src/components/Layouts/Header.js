import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import CreateDialog from '../Exercises/Dialog';

const styles = {
  flex: {
    flex: 1,
  }
};

const Header = ({ classes }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          News
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
