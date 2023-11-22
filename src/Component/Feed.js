import { Box } from '@mui/material';
import Post from './Post';



export  function Feed ( props )
{

    console.log( "list of data", props.lists )

    const { lists } = props
    console.log( "list", lists.list );



    return (
        <Box flex={ 4 } p={ 2 }>
            {
                lists.list && lists.list.map( ( list ) =>
                {
                    return <Post photoUrl={ list.photoUrl }
                        userName={list.userName}
                        message={list.messages} />

                } )
            }

            <Post photoUrl='https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdQJSwmiqpIbpHpZq2WhXp_vp72_01IAzfD0coMyWryI-Q&oe=63BB60E4'
                userName="saikumar"
                message="saikumar in italent digital" />

            {/* <Post />
            <Post /> */}
        </Box>
    )
}
