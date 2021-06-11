import { useState, useRef, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Text() {
  
  const [fieldTitle, setFieldTitle] = useState(true);
  const [fieldDetails, setFieldDetails] = useState(true);
  const title= useState('');
  const details = useState('');

  const wrapperRef = useRef(null);
  
  //const DblClick = (event) => {
    //setTitle(event.currentTarget.id);
   // setDetails(event.currentTarget.id);

   // console.log('clicou')
  //};

  useEffect(() => {

    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setFieldTitle();
      }
    }
   // const handleHideDropdown = (event) => {
     // if (event.key === 'Escape') {
      //  setIsDropdownVisible(false);
     // }//
    //};//

   // document.addEventListener('keydown', handleHideDropdown, true);

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }); 

  return (
    <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">
         
      <Grid item>

        <Grid container>
          {fieldTitle ?
            <div id={title} onDoubleClick={() => setFieldTitle(false)}>
              Nome do Processo
            </div>
            :
            <TextField
              ref={wrapperRef}
              value={title} 
              onKeDyown={(event) => {
                  if (event.key === 'Enter' ){
                    setFieldTitle(true)
                  }
                }
              }
              onChange={(e) => (e.target.value.fieldTitle)}
              id="standard-basic"
              color='secondary'
            >
            </TextField>
          }
        </Grid>

      </Grid>
      <Grid container >
        { fieldDetails ?
          <div id={details} onDoubleClick={() => setFieldDetails(false)}>
            Descrição
          </div>
          :
          <TextField
            value={details}
            onKeDyown={(event) => {
                if (event.key === 'Enter' ){
                  setFieldDetails(true)
                }
              }
            }
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