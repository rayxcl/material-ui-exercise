import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
        // centered
        value={index}
        onChange={onIndexSelect}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);
