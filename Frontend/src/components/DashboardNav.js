import React from 'react';
import './../styles/Dashboard.css'

const DashboardNav = () => {
    return (
        <div>
            <form class='dashboard-search'>
                <input type='text' class='search' placeholder='Search...'></input>
                <input type='submit' value='Search'></input>
            </form>
        </div>
    );
}

export default DashboardNav;
