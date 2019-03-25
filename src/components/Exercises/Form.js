import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

// import { withStyles } from '@material-ui/core/styles';

/* const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing.unit,
    // minWidth: 120,
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
}); */

export default class extends Component {
  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props;

    // console.log('getInitSate ()');
    // console.log(exercise);
    return exercise || {
      title: '',
      description: '',
      muscles: '',
    };
  }

  /* static getDerivedStateFromProps({ exercise }) {
    return exercise || null;
  } */
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(`next: ${nextProps.exercise.title}`);
    // console.log(`prev: ${prevState.title}`);
    // if (!nextProps.exercise) return null;

    if (nextProps.exercise && nextProps.exercise.id !== prevState.id) {
      return nextProps.exercise;
    }

    // console.log('getDerivedStateFromProps ()');
    // console.log(nextProps.exercise);
    return null;
    // return nextProps.exercise || null;

    // return {
    //   title: nextProps.title,
    //   description: nextProps.description,
    //   muscles: nextProps.muscles,
    // };
    //     if (nextProps.value !== prevState.value) {
    //   return { exercise: nextProps.exercise };
    // }
    // return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }

  handleChange = e => {
    // console.log(e.target.name);
    // this.setState(state => ({
    //   exercise: {
    //     ...state.exercise,
    //     [e.target.name]: e.target.value,
    //   },
    // }));
    // console.log(`[${e.target.name}]: ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    });
    // console.log(this.state);
    // console.log(this.getInitState());

    // this.setState(this.getInitState());
    // this.setState(this.state);
  }

  render() {
    const { muscles: categories, exercise } = this.props;
    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          name="title"
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            name="muscles"
            value={muscles}
            onChange={this.handleChange}
          >
            {categories.map(category => (
              <MenuItem
                key={category}
                value={category}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          name="description"
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}
