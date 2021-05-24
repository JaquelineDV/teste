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
  
  const [fieldTitle, setFieldtitle] = useState('');
  const [fieldDetails, setFielddetails] = useState('');
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();

  const handleChange = (e) => {
    setFieldtitle(e.target.value);
    setFielddetails(e.target.value);
  };

  const Click = (event) => {
    setTitle(event.currentTarget);
    setDetails(event.currentTarget);
  };

  return (
    <form noValidate autocomplete="off" type='' >
      <div className={classes.group}>
        <div id={title} onClick={Click}>
          Nome do Processo
        </div>
        <TextField
          value={fieldTitle} 
          onChange={handleChange}
          id="standard-basic"
          color='secondary'
        >
        </TextField>
      </div>
      <div className={classes.group}>
        <div id={details} onClick={Click}>
          Descrição
        </div>
        <TextField
          value={fieldDetails}
          onChange={handleChange}
          id="standard-basic"
          color='secondary'
        >
        </TextField>
      </div>
    </form>
  );
}