import { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Popover, Grid} from '@material-ui/core';


const useStyles = makeStyles(() =>({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
}));


const Pop = ({paramComponent ,paramId ,paramOpen, paramAnchorEl, paramOnClose }) => {

  const classes = useStyles();

  return (
    <>
      <Popover
        id={paramId}  
        open={paramOpen && paramAnchorEl ? true: false}
        className={classes.Pop}
        anchorEl={paramAnchorEl}
        onClose={paramOnClose}
        anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container style={{padding : '20px'}}>
          <Grid item>
            {paramComponent()}
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}
Pop.propTypes = {
  paramComponent : PropTypes.func,
  paramId : PropTypes.string,
  paramOpen : PropTypes.bool,
  paramAnchorEl : PropTypes.object,
  paramOnClose : PropTypes.func,
}

export default memo(Pop);