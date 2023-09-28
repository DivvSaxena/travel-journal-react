import React from 'react'

export default function Card(prop){
    return (
        <div className="card--container">
            <img src={prop.item.imageUrl} />
            <div className="card--subcontainer">
                <div className="locations--card">
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>{prop.item.location}</h3>
                    <a href={prop.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{prop.item.title}</h1>
                <h4>`${prop.item.startDate} - ${prop.item.endDate}`</h4>
                <p>{prop.item.description}</p>
            </div>
        </div>
    )
}