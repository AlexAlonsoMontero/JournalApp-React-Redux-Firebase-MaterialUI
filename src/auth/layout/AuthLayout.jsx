import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid';



export const AuthLayout = ({ children, title = ' ' }) => {
    return (
        <Grid
            className="animate__animated animate__fadeIn"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', pt: 4 }}
        >
            <Grid item
                className='box-shadow  animate__animated animate__fadeInLeft'
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    margin: '25px'
                }}>
                <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

                {children}

            </Grid>
        </Grid>
    )
}

