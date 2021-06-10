import { useState, useRef, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Text() {
  
  const [fieldTitle, setFieldTitle] = useState(true);
  const [fieldDetails, setFieldDetails] = useState(true);
  const [title, setTitle] = useState(true);
  const [details, setDetails] = useState(true);
  
  const wrapperRef = useRef(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 

  const DblClick = (event) => {
    setTitle(event.currentTarget.id);
    setDetails(event.currentTarget.id);

    console.log('clicou');
  };

  const handleHideDropdown = event => {
    if (event.key === '') {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {

    const handleClickOutside = event => {
      
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ setIsDropdownVisible]);

  return (
    <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">
         
      <Grid item>

        <Grid container>
          {setFieldTitle ?
            <div item id={title} onDoubleClick={(e) => DblClick(e)}>
              Nome do Processo
            </div>
            :
            <TextField
              ref={wrapperRef}
              value={fieldTitle} 
              onChange={(e) => (e.target.value.fieldTitle)}
              id="standard-basic"
              color='secondary'
            >
            </TextField>
          }
        </Grid>

      </Grid>
      <Grid container >
        { setFieldDetails ?
          <div id={details} onDoubleClick={(e) => DblClick(e)}>
            Descrição
          </div>
            :
          <TextField
            value={fieldDetails}
            onChange={(e) => (e.target.value.fieldDetails)}
            id="standard-basic"
            color='secondary'
          >
          </TextField>
        }
      </Grid>
    </Grid>
  );
}