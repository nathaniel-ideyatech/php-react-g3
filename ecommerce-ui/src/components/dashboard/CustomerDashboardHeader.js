import React from 'react';


import { Filter } from 'components'


const CustomerDashboardHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="col p-0">
                <button type="button" 
                    id="sidebarHide" 
                    className="sidenav-btn"
                    // onClick={ onClick }
                    >
                    <span className="fas fa-align-left"></span>
                </button>
                <span style={{"margin-left" : "15px"}}>
                    <img src="/img/kommune-logo.png"  width="200px" alt="Kommune Logo"/>
                </span>
            </div>
            <Filter>
                <Filter.Text
                    onChange={()=>console.log("Hello")}>
                </Filter.Text>
            </Filter>

        </nav>
    )
}

export default CustomerDashboardHeader