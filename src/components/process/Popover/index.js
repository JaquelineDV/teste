import { memo } from 'react';
import PropTypes from 'prop-types';
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


const Pop = ({paramComponent ,paramId ,paramOpen, paramAnchorEl, paramOnClose }) => {
  

console.log( ' - ' , paramId ,paramOpen, paramAnchorEl)
  return (
    <div>
      <Popover
        id={paramId}  
        open={paramOpen && paramAnchorEl ? true: false}
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
        {paramComponent()}
      </Popover>
    </div>
  );
}
Pop.propTypes = {
  paramComponent : PropTypes.func,
  paramId : PropTypes.string,
  paramOpen : PropTypes.bool,
  paramAnchorEl : PropTypes.object,
  paramOnClose : PropTypes.func,
}

export default Pop;