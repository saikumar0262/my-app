import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { v4 } from 'uuid'
// import Feed from './Feed'



export const Add = ( props ) =>
{
    const [ open, setOpen ] = useState( false )
    const [ data, setData ] = useState( {
        list: [],
        message: "",

    } );
    

    props.getAdd( data )

    // const [ image, setImage ] = useState( "" );
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 280,
        bgcolor: 'white',
        border: '0',
        borderRadius: "5px",
        color: 'gray',
        boxShadow: 24,
        p: 4,

    };

    const uploadFile = () =>
    {
        document.getElementById( "imagefile" ).click();
    };

    // const handleClick = ( e ) =>
    // {
    //     if ( e.target.files[ 0 ] )
    //     {
    //         setImage( e.target.files[ 0 ] );
    //     }

    // };
    // console.log( image.name, "image" );

    const submitButton = ( e ) =>
    {
        e.preventDefault();
        const newList = {
            id: v4(),
            messages: data.message,
            userName: 'saikumar',
            photoUrl: 'https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdQJSwmiqpIbpHpZq2WhXp_vp72_01IAzfD0coMyWryI-Q&oe=63BB60E4'
            // image: image,
        };

        setData( ( prevState ) => ( {
            list: [ ...prevState.list, newList ],
            // message: "",
            // // image: ''
        } ) );

        setOpen( false );
    };
    // console.log( data.message, "list" );
    console.log( data.list, "list" );





    return (

        <>
            <Tooltip title="Add" onClick={ e => setOpen( true ) } sx={ { position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, } }>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={ open }
                onClose={ e => setOpen( false ) }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ style }>
                    <Typography variant="h6" textAlign='center'>
                        Create Post
                    </Typography>
                    <form onSubmit={ submitButton }>
                        <div className='user-box'>
                            <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdQJSwmiqpIbpHpZq2WhXp_vp72_01IAzfD0coMyWryI-Q&oe=63BB60E4" alt='user' />
                            <Typography>
                                saikumar
                            </Typography>
                        </div>
                        <TextField
                            sx={ { width: '100%' } }
                            multiline
                            rows={ 4 }
                            placeholder="write.."

                            variant="standard"
                            value={ data.message }
                            onChange={ ( e ) =>
                                setData( ( prevState ) =>
                                {
                                    return { ...prevState, message: e.target.value };
                                } )
                            }
                        />
                        <Stack direction="row" gap={ 1 } mt={ 2 } mb={ 3 }>
                            <EmojiEmotions color='secondary' />
                            <Image color='primary' onClick={ uploadFile } />
                            {/* <input
                                type='file'
                                id='imagefile'
                                onChange={ handleClick }
                                style={ { display: "none" } }
                            /> */}
                            <VideoCameraBack color='success' onClick={ uploadFile } />
                        </Stack>
                        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                            <Button type='submit'>post</Button>

                        </ButtonGroup>

                    </form>

                </Box>
            </Modal>
        </>
    )
}

 