import React from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import { Filter } from 'components'

import RoutePath from 'constants/RoutePath';


const CustomerDashboardHeader = ({onChange}) => {

    const onWrappedChange = (event) =>{
        // onChange
        console.log(event.target)
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{"position":"fixed", "zIndex":"1"}}>
            <div className="col p-0">
                <DropdownButton id="dropdown-basic-button" className="sidenav-btn" title={<span className="fas fa-align-left"></span>} style={{"display":"inline-block"}}>
                    <Dropdown.Item href={RoutePath.LOGIN_URL}>Sign in</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
                </DropdownButton>
                <span style={{"marginLeft" : "50px"}}>
                    <img src="/img/kommune-logo.png"  width="200px" alt="Kommune Logo"/>
                </span>
            </div>
            <Filter>
                <Filter.Text
                    onChange={onWrappedChange}>
                </Filter.Text>
            </Filter>

        </nav>
    )
}

export default CustomerDashboardHeader