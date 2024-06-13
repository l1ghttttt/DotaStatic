import * as React from "react";
import './AppBurger.css'
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {NavLink} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

const AppBurger:React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} style={{width: `40vw`,color: `black`, background: `linear-gradient(gray, white 80%)`}}>
            <List >
                {['News', 'Heroes', 'Teams', 'Players'].map((text) => {
                    let link:string
                    switch (text) {
                        case 'News' :
                            link = `/`
                            break
                        case 'Heroes' :
                            link = `/heroes`
                            break
                        case 'Teams' :
                            link = `/teams`
                            break
                        case 'Players' :
                            link = `/players`
                            break
                        default:
                            link = `/`
                    }
                    return (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <NavLink className={({isActive}) => isActive ? "active" : ''} to={link}><ListItemText primary={text} /></NavLink>
                            </ListItemButton>
                        </ListItem>)}
                )}
            </List>
            <List>
                {['На кофе :3'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div className={`burger__cont`}>
        <Button onClick={toggleDrawer(true)} style={{color: `white`, backgroundColor: `black`}}><img src="/icons8-menu-500.svg" alt="" width={50}/></Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </div>
    );
};

export default AppBurger;