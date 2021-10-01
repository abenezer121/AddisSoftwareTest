
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {NavDiv , NavLi , NavUl , NavLink} from './navbarstyle'

function Navbar () {
    const history = useHistory();

    return (
            <NavDiv>
                 <NavUl>
                    <NavLi><NavLink onClick={() => history.push("/")}>Home</NavLink></NavLi>
                    <NavLi><NavLink onClick={() => history.push("/users")}>Users</NavLink></NavLi>
                    <NavLi><NavLink onClick={() => history.push("/addusers")}>add</NavLink></NavLi>
                </NavUl>
            </NavDiv>
           
    );
}

export default Navbar;
