
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'


const Post = ( { photoUrl, userName, message,time } ) =>
{

    return (
        <>
            <div>
                <Card sx={ { m: '20px' } }>
                    <CardHeader
                        avatar={
                            <Avatar src={ photoUrl } sx={ { bgcolor: 'red' } } aria-label="recipe" />


                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title={userName}
                        subheader="jan,3,2023"
                    />
                    <CardMedia
                        component="img"
                        height="20%"
                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {message}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={ <FavoriteBorder /> } checkedIcon={ <Favorite sx={ { color: 'red' } } /> } />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>
        </>
    )
}

export default Post