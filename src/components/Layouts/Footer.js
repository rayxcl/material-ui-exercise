import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withContext } from '../../context';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class Footer extends Component {
  onIndexSelect = (e, index) => {
    const { onCategorySelect, muscles } = this.props;
    onCategorySelect(index === 0 ? '' : muscles[index - 1]);
  };

  getIndex = () => {
    const { category, muscles } = this.props;

    return category
      ? muscles.findIndex(group => group === category) + 1
      : 0;
  }

  render() {
    const { muscles } = this.props;

    return (
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          // centered
          value={this.getIndex()}
          onChange={this.onIndexSelect}
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
  }
}

export default withContext(withStyles(styles)(Footer));
