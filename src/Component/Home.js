

import { Box, Stack } from '@mui/material';
import {Sidebar} from "./Sidebar";
import { Feed } from "./Feed";
import {Right} from "./Right";
import { Add } from './Add';
import { useState } from 'react';
import { Navbar } from './Navbar';

export const Home = () =>
{
    const [ lists, setList ] = useState( [] )



    const getAdd = ( args ) =>
    {
        console.log( { args }, "data" )
        setList( args );
    }

    

    return (
    <>
        
                <Box>
                    <Navbar />

                    <Stack direction='row' spacing={ 2 } justifyContent='space-between'>

                        <Sidebar />
                        <Feed lists={ lists } />
                        <Right />
                    </Stack>
                    <Add getAdd={ getAdd } />
                </Box >
            
        
        </>
    )
}
