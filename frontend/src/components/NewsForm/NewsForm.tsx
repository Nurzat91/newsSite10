import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { NewsPropsWithoutId } from '../../types';
import FileInput from '../FileInput/FileInput';
import SaveIcon from '@mui/icons-material/Save';

interface Props{
  onSubmit: (ProductMutation: NewsPropsWithoutId) => void;
  isLoading: boolean;
}
const NewsForm: React.FC<Props> = ({onSubmit, isLoading}) => {
  const [state, setState] = useState<NewsPropsWithoutId>({
    title: '',
    content: '',
    image: null,
  });

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setState( prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            required
            id="title" label="Title"
            name="title"
            value={state.title}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="content" label="content"
            name="content"
            type="text"
            value={state.content}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <FileInput onChange={fileInputChangeHandler} name="image" label="news image"/>
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
          >
            Save
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewsForm;