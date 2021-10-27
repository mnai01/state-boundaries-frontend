import MenuIcon from '@mui/icons-material/Menu';
import { Link as MuiLink, AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <MuiLink variant='h6' sx={{ flexGrow: 1, color: 'white' }} component={Link} to='/'>
                        State Borders
                    </MuiLink>
                    <Button color='inherit' component={Link} to={'/home'}>
                        Home
                    </Button>
                    <Button color='inherit' component={Link} to={'/about'}>
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
