import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'





export const Right = () =>
{
    return (
        <Box flex={ 2 } p={ 2 } sx={ { display: { xs: 'none', sm: 'block' } } }>
            <Box position='fixed'>
                <Typography variant='h6' fontWeight={100}>
                    Friends Group
                </Typography>
                <AvatarGroup total={ 12 } max={ 4 }>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                    <Avatar alt="Travis Howard" src="https://openai.com/content/images/2021/01/2x-no-mark-1.jpg" />
                    <Avatar alt="Cindy Baker" src="https://media.gettyimages.com/id/947740086/photo/wide-panoramic-view-of-mumbai-financial-capital-of-india.jpg?s=612x612&w=gi&k=20&c=lJ58yLaDjVNw2BLnvhtJr-od0zZegRNIKSRJ2ak5FbE=" />
                    <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/518256134/photo/charminar.jpg?s=612x612&w=0&k=20&c=El2-xCRHhkaDHJwz4cUzNmJ8E_FVAqwutwQIvn4vReA=" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Box>
        </Box>
    )
}
