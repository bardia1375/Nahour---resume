import React from 'react'
import { NavbarStore } from './components/NavbarStore/NavbarStore'
import Footer from './Pages/Homepage/footer/footer'
import Store from './Pages/store/Store'

export const Shopping = () => {
    return (
        <div>
            {/* <NavbarStore/> */}
        
            <Store/>
            <Footer />
        </div>
    )
}
