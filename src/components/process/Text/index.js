import { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Text() {
  
  const [fieldTitle, setFieldTitle] = useState(null);
  const [fieldDetails, setFieldDetails] = useState(null);
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();

  const handleChange = (e) => {
    setFieldTitle(e.target.value.fieldTitle);
    setFieldDetails(e.target.value.fieldDetails);
  };

  const DblClick = (event) => {
    setTitle(event.currentTarget.id);
    setDetails(event.currentTarget.id);

    console.log('clicou');
  };

 

  return (
    <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">
         
      <Grid item>

        <Grid container>
          {true ?
            <div item id={title} onDoubleClick={(e) => DblClick(e)}>
            Nome do Processo
            </div>
            :
            <TextField
            value={fieldTitle} 
            onChange={handleChange}
            id="standard-basic"
            color='secondary'
          >
          </TextField>
          }
        </Grid>

      </Grid>
      <Grid container >
        { true ?
          <div id={details} onDoubleClick={(e) => DblClick(e)}>
            Descrição
          </div>
            :
          <TextField
            value={fieldDetails}
            onChange={handleChange}
            id="standard-basic"
            color='secondary'
          >
          </TextField>
        }
      </Grid>
    </Grid>
  );
}
//{ param ? component1 : conponent2 }