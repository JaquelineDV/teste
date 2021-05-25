import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Pop from 'src/components/process/Popover';
import Text from 'src/components/process/Text';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Boot = () => {

  const classes = useStyles();

  const [anchorElBtn, setAnchorElBtn] = useState(null);
  const [open, setOpen] =  useState(false);
  const [id, setId] = useState('');


  const handleClose = () => {
    setAnchorElBtn(null);
  };

  const handleClick = (event) => {
    setAnchorElBtn(event.currentTarget);
    setOpen(true);
    setId(event.currentTarget.id);
  };

  return ( <>
    <IconButton 
      id='idBtnClick'
      className={classes.iconButton} 
      variant="contained"  
      color="primary"
      onClick={(e) => handleClick(e)}
    >
      <AddIcon />
    </IconButton>
    <Pop paramId={id} paramOpen={open} paramAnchorEl={anchorElBtn} paramOnClose={handleClose} paramComponent={() => {return(<Text />)}}/>
  </>);
}

export default memo(Boot);