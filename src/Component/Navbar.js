
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Home, OndemandVideo, Apps, Forum, Notifications, Search, People, SportsEsports, ArrowDropDown } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>
{

    const [ open, setOpen ] = useState( false )
    return (
        <AppBar position='sticky' bgColor direction='colounm' >
            <div className='div'>
                <div className='nav'>
                    <div className='nav-left'>
                        <img
                            src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
                            alt='facebook'
                            className='facebook'
                        />
                        <div className='search'>
                            <Search />
                            <input type='text' placeholder='search facebook' />
                        </div>
                    </div>
                    <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
                    <div className='nav-middle'>
                        <div className='options-active'>
                            <NavLink to='/'> <Home fontSize='large' /></NavLink>
                        </div>
                        <div className='options'>
                            <NavLink to='/video'> <OndemandVideo fontSize='large' /></NavLink>
                        </div>
                        <div className='options'>
                            <NavLink to='/people'> <People fontSize='large' /></NavLink>
                        </div>
                        <div className='options'>
                            <NavLink to='/sport'><SportsEsports fontSize='large' /></NavLink>
                        </div>
                        </div>
                    </Box>
                    
                    <div className='nav-right'>
                        <div className='info'>
                            <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdRlH-6SGs3xmhywUrf8BZxyZADkyhzW2LyIWOq26FrMqQ&oe=63B8F624' />
                            <h5>k saikumar</h5>
                        </div>
                        <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
                        <IconButton>
                            <Apps />
                        </IconButton>
                        <IconButton>
                            <Forum />
                        </IconButton>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                        <IconButton>
                            <ArrowDropDown />
                            </IconButton>
                        </Box>
                    </div>
                </div>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"

                    open={ open }
                    onClose={ e => setOpen( false ) }
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>

            </div>

        </AppBar>
    )
}
