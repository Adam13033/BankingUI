import * as React from 'react';
import Typography from '@mui/material/Typography';
import { CssBaseline, Link } from '@mui/material';



const CopyRightFooter = (props) => {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            <CssBaseline />
            { 'Copyright ©' }
            <Link color='inherit' href="localhost:8080/home">
                Adam Lemdani
            </Link>
            {new Date().getFullYear()}
            {','}
        </Typography>
    );
} 

export default CopyRightFooter;