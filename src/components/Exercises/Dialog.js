import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Fab,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import Form from './Form';
// import { Consumer } from '../../context';
import { withContext } from '../../context';

/* const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing.unit,
    // minWidth: 120,
    width: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
}); */


class CreateDialog extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  /* handleChange = e => {
    // console.log(e.target.name);
    // this.setState(state => ({
    //   exercise: {
    //     ...state.exercise,
    //     [e.target.name]: e.target.value,
    //   },
    // }));
    this.setState({
      exercise: {
        ...this.state.exercise,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit = () => {
    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-'),
    });

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: '',
      },
    });
  } */

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  }

  render() {
    const { open } = this.state;
    // const { classes, muscles: categories } = this.props;

    // 이 props는 부모 컴포넌트인 Header에서 받아오는 것이 아니라 컨텍스트에서 받아오는 것이다.
    const { muscles } = this.props;


    return (
        <>
          <Fab
            aria-label="Add"
            size="small"
            color="secondary"
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            fullWidth
            maxWidth="xs"
          >
            <DialogTitle>
            Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
              Please fill out the form below.
              </DialogContentText>
              <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
            </DialogContent>
          </Dialog>
        </>
    );
  }
}

// JSX 내부에서 바로 컨텍스트에 접근하려면 Consumer를 사용하면 된다.
// JSX 외의 영역에서 컨텍스트에 접근하려면 (예하면 클래스 내부 && render함수 외부) 아래처럼 HOC를 사용해야 한다.
// 위의 코드에서 handleFormSubmit 함수안에서 this.handleToggle() 및 this.props.onCreate(exercise)
// 두 개 함수를 동시에 실행하려고 하는 경우 유용하게 사용 가능.
export default withContext(CreateDialog);

// <form>
//   <TextField
//     label="Title"
//     value={title}
//     name="title"
//     onChange={this.handleChange}
//     margin="normal"
//     className={classes.formControl}
//   />
//   <br />
//   <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="muscles">Muscles</InputLabel>
//     <Select
//       name="muscles"
//       value={muscles}
//       onChange={this.handleChange}
//     >
//       {categories.map(category => (
//         <MenuItem
//         key={category}
//         value={category}
//       >
//         {category}
//       </MenuItem>
//       ))}
//     </Select>
//   </FormControl>
//   <br />
//   <TextField
//     multiline
//     rows="4"
//     label="Description"
//     value={description}
//     name="description"
//     onChange={this.handleChange}
//     margin="normal"
//     className={classes.formControl}
//   />
// </form>;
