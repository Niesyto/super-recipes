import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo512.png';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        justifyContent: 'center'
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80px',
        height: '80px',
        display: 'block'
    },
    divider: {
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40px',
        height: '5px',
        backgroundColor: theme.palette.secondary.main,
    },
    menuText: {
        color: theme.palette.text.primary,
        textDecoration:"none",
    }

}));


export default function Menu() {
    const classes = useStyles();


    return (
        <Drawer anchor="left" variant="permanent" className={classes.drawer} classes={{
            paper: classes.drawerPaper,
        }}>
            <div>
                <img src={logo} alt="logo" className={classes.logo} />
                <Divider className={classes.divider} />
            </div>
            <div >
                <List>
                    <Link to="/Browse"   className={classes.menuText} >
                        <ListItem button >
                            <ListItemText primary="Browse recipes"  />
                        </ListItem>
                    </Link>
                    <Link to="/Add" className={classes.menuText}>
                        <ListItem button >
                            <ListItemText primary="Add new recipe" />
                        </ListItem>
                    </Link>
                    <Link to="/Liked" className={classes.menuText}>
                        <ListItem button >
                            <ListItemText primary="Liked recipes"/>
                        </ListItem>
                    </Link>
                    <Link to="/Profile" className={classes.menuText}>
                        <ListItem button >
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Drawer>
    )
}