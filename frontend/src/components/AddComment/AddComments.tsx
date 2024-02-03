import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddComment } from '../../types';


const AddComments = () => {
  const navigate = useNavigate();
  const [stateComment, setStateComment] = useState<AddComment>({
    name: '',
    content: '',
  });


  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setStateComment(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () =>{
    navigate('/news/:id');
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            required
            id="name" label="Name"
            name="name"
            value={stateComment.name}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="content" label="content"
            name="content"
            type="text"
            value={stateComment.content}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddComments;