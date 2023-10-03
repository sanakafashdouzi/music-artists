import React from 'react';
import {AppBar,Container,Toolbar,Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position='sticky'>
          <Container maxWidth='lg'>
            <Toolbar>
                <Typography component='h1' variant='h5' fontWeight='bold' flex={1} >
                    <Link to="/" style={{textDecoration:"none" , color:"#fff"}}>
                    معروف ترین نوازندگان پیانو
                    </Link>
                </Typography>
                <Link to="/" style={{ color:"#fff"}}>
                 <MenuBookIcon />
                </Link>
            </Toolbar>
          </Container>
        </AppBar>
    );
};

export default Header;