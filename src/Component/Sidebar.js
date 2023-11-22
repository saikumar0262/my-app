import { ArrowDropDown, Bookmark, Feed, Group, History, Home, ModeNight, OndemandVideo, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'


export const Sidebar = () =>
{
    return (
        <Box flex={ 1 } p={ 2 } sx={ { display: { xs: 'none', sm: 'block' } } }>
            <Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet= 'a' href='#home'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#friends'>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#marketplace'>
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#watch'>
                        <ListItemIcon>
                            <OndemandVideo />
                        </ListItemIcon>
                        <ListItemText primary="Watch" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#history'>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#saved'>
                        <ListItemIcon>
                            <Bookmark />
                        </ListItemIcon>
                        <ListItemText primary="save" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#pages'>
                        <ListItemIcon>
                            <Feed />
                        </ListItemIcon>
                        <ListItemText primary="pages" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#see more'>
                        <ListItemIcon>
                            <ArrowDropDown />
                        </ListItemIcon>
                        <ListItemText primary="See More" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton componenet='a' href='#mode'>
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}
