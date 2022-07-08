import { Grid, Typography } from "@mui/material";
import  StarOutlineIcon from '@mui/icons-material/StarOutline';

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacin={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: `calc(100vh - 125px)`, backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid item xs={ 12 } className="animate__animated animate__fadeIn">
            <StarOutlineIcon sx={{fontSize:100, color:'white'}} />

        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="white" variant='h5'>Selecciona o crea una entrada</Typography>
        </Grid>
    </Grid>
    
  )
}
