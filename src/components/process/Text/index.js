import { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Text() {

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
    setDetails(e.target.value);
  };

  return (
    <form noValidate autocomplete="off" >
      <div className={classes.group}>
        {tittle}
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title} 
          onChange={handleChange}
          id="standard-basic"
          label="Nome do Processo"
          color='secondary'
        >
        </TextField>
      </div>
      <div className={classes.group}>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          onChange={handleChange}
          id="standard-basic"
          label="Detalhes"
          color='secondary'
        >
        </TextField>
      </div>
    </form>
  );
}