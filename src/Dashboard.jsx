import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DataTable from './Table.tsx'; // Import the DataTable component

// Define your Dashboard component
const Dashboard = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" />; // Redirect to home if not logged in
    }

    return (
        // Render the DataTable component when the route matches /Dashboard and the user is logged in
        <Routes>
            <Route path="/" element={<DataTable />} />
        </Routes>
    );
};

export default Dashboard;