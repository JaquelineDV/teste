import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Pop from 'src/components/process/Popover';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  iconButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 30px',
    marginTop: 200,
    marginLeft: 550,
    display: 'flex',
    alignItems: 'center',
    width: 200,
  },
}));

export default function Boot() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Pop' : undefined;

  return (
    <Button 
      className={classes.iconButton}
      aria-describedby={id} 
      variant="contained"  
      onClick={handleClick}
    >
      Pop
      <Pop />
    </Button>
  );
}