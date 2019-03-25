import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Form from './Form';

// const styles = {
//   Paper: {
//     padding: 20,
//     marginTop: 5,
//     marginBottom: 10,
//     height: 500,
//     overflowY: 'auto',
//   },
// };
const styles = theme => ({
  paper: {
    // padding: 20,
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    },
    marginBottom: 10,
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
});

// export default ({
const Exercises = ({
  classes,
  exercises,
  category,
  muscles,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
}) => {
  return (
    <Grid
      container
      // spacing={16}
      className={classes.container}
    >
      <Grid
        item
        xs={12}
        sm={6}
        className={classes.item}
      >
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) => (
            !category || category === group
              ? (
                <Fragment key={group}>
                  <Typography
                    variant="h5"
                    color="secondary"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton color="primary" onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton color="primary" onClick={() => onDelete(id)}>
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              )
              : null))}
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className={classes.item}
      >
        <Paper className={classes.paper}>
          <Typography
            variant="h4"
            gutterbottom="true"
            color="secondary"
          >
            {title}
          </Typography>
          {editMode
            ? (
              <Form
                key={id}
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
              />
            )
            : (
              <Typography variant="subtitle1">
                {description}
              </Typography>
            )
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Exercises);

// export default  props => <div>Exercises</div>
