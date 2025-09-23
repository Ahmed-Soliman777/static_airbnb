import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer'

export default function Layout() {
    return (
        <div>

            {/* call navbar component here */}
            <Header />

            <div style={{backgroundColor: "#f7f7f7"}}>
                <Outlet />
            </div>
            {/* call footer component here */}
            <Footer />

        </div>
    )
}
