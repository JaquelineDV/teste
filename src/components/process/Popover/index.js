import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(() =>({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  iconButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: 200,
    marginLeft: 600,
  },
}));

  
export default function Pop() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Pop' : undefined;


  return (
    <div>
      <Button className={classes.iconButton}
        aria-describedby={id} 
        variant="contained"  
        onClick={handleClick}
      >
        Open Popover
      </Button>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Text />
      </Popover>
    </div>
  );
}

function Text() {

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
    setDetails(e.target.value);
  };

  return (
    <form noValidate autocomplete="off" >
     <div>{title}</div>
      <div className={classes.group}>
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