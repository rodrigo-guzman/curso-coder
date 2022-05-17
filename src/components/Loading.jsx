import { Box,CircularProgress } from '@mui/material';

const LoadingComponent = () => {
    return(<>
    <Box sx={{marginTop: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress variant="indeterminate" size={40} thickness={4} value={100}/>
    </Box>
    </>)
};

export default LoadingComponent;