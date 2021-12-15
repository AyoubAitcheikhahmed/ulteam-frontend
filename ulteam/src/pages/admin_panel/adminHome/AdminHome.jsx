import React from 'react';
import "./adminHome.css" ;
import Info from '../adminComponents/Info';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chart from '../adminComponents/Chart';
import Navbar from '../adminComponents/AdminNavbar';
import AdminProductList from '../adminProductList/AdminProductList';
import { chartDummyData } from '../DummyData'


function AdminHome() {
    return (
        <>
        
            <Navbar />
            <Info />
            <Chart title="Sales Inqueries" data={chartDummyData} dataKey="sales" />

        </>
    )
}

export default AdminHome
