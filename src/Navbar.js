import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    React Material UI example
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;