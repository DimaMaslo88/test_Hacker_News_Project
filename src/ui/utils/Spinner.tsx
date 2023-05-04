import React from 'react';
import {Box, CircularProgress} from "@mui/material";

export default function Spinner() {
    return (
        <Box style={{display:"flex",width:"100%",justifyContent:"center"}} >

            <CircularProgress  thickness={6} />
        </Box>
    );
}
