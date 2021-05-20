import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Text from 'src/components/process/Text';


const useStyles = makeStyles(() =>({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
}));


export default function Pop() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Pop' : undefined;


  return (
    <div>
      <Popover
        className={classes.Pop}
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