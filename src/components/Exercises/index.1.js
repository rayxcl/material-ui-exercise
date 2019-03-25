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
  Paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
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
    <Grid container spacing={16}>
      <Grid item xs sm={6}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) => (
            !category || category === group
              ? (
                <Fragment key={group}>
                  <Typography
                    variant="h5"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)}>
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
      <Grid item xs sm={6}>
        <Paper className={classes.Paper}>
          {editMode
            ? (
              <Form
                key={id}
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
              />
            )
            : <>
              <Typography
                variant="h4"
                gutterbottom
              >
                {title}
              </Typography>
              <Typography variant="subtitle1">
                {description}
              </Typography>
              </>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Exercises);

// export default  props => <div>Exercises</div>
