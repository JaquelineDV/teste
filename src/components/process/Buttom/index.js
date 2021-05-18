import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Boot() {

  const classes = useStyles();
  const setAnchorEl = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (push) => {
    setAnchorEl(push.currentTarget);
  };

  return (
    <div className={classes.root}>
      <IconButton
       variant="contained"
       color="primary" 
       onClick={handleClick}
       onClose={handleClose}
      >
       Editar
      </IconButton>
    </div>
  );
}