import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

export default function App(prop){
    
    const cards = data.map(item => {
        return (
            <Card 
                item ={item}
            />
        )
    })
    
    return (
        <>
            <Navbar />
            {cards}
            <Footer />
        </>
    )
}