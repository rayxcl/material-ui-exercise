import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import { Provider } from '../context';

class App extends Component {
  state = {
    exercises,
    exercise: {}
    // editMode: false
  };

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: [],
    }), {});

    // console.log(initExercises);

    const result = this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = [...exercises[muscles], exercise];

      // exercises[muscles] = exercises[muscles]
      //   ? [...exercises[muscles], exercise]
      //   : [exercise];

      return exercises;
    }, initExercises);
    // console.log(result);

    return Object.entries(result);
  }

  handleTabSelect = category => {
    this.setState({
      category,
    });
  };

  handleExerciseSelect = id => {
    this.setState({
      exercise: this.state.exercises.find(exercise => exercise.id === id),
      editMode: false
    });
  };

  handleExerciseCreate = exercise => {
    this.setState({
      exercises: [
        ...this.state.exercises,
        exercise,
      ]
    });
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(exercise => exercise.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));

    console.log(this.exercises);
  }

  handleExerciseSelectEdit = id => (
    this.setState({
      editMode: true,
      exercise: this.state.exercises.find(exercise => exercise.id === id),
    }));

  handleExerciseEdit = exercise => {
    this.setState({
      exercises: [
        ...this.state.exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      // exercise
    });
  }

  getContext = () => ({
    muscles,
    ...this.state
  })


  render() {
    const exercises = this.getExercisesByMuscles();
    // console.log(exercises);

    const { category, exercise, editMode } = this.state;
    return (
      <Provider value={this.getContext()}>
        <>
          <CssBaseline />
          <Header onExerciseCreate={this.handleExerciseCreate} />
          <Exercises
            exercise={exercise}
            exercises={exercises}
            muscles={muscles}
            category={category}
            editMode={editMode}
            onSelect={this.handleExerciseSelect}
            onDelete={this.handleExerciseDelete}
            onSelectEdit={this.handleExerciseSelectEdit}
            onEdit={this.handleExerciseEdit}
          />
          <Footer
            category={category}
            muscles={muscles}
            onSelect={this.handleTabSelect}
          />
        </>
      </Provider>
    );
  }
}

export default App;
