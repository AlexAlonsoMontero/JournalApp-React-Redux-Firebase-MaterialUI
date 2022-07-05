import { Grid, Typography } from "@mui/material"
import PropTypes from 'prop-types';


export const AuthLayout = ({ children, title='' }) => {
    return (
        <Grid
            container
            spacin={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', pt: 4 }}
        >
            <Grid
                className='box-shadow'
                xs={8} md={3}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >
                <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

                { children }

            </Grid>
        </Grid>
    )
}

AuthLayout.propTypes = {
    tile: PropTypes.string.isRequired,
}
