import Background from './Images/wall_of_jdm_wheels_wallpaper.jpg'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DataTable from './Table.tsx'; // Import the DataTable component

// Define your Dashboard component
const Dashboard = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" />; // Redirect to home if not logged in
    }

    return (
        <div 
        style={{backgroundImage: `url(${Background})` ,backgroundPosition: 'top',zIndex: '-1', backgroundSize: 'cover', width: '100vw', height: '100vh',}}>
        <Routes>
            <Route path="/" element={<DataTable />} />
        </Routes>

</div>
    );
};

export default Dashboard;