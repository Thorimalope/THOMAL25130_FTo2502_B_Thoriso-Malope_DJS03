import React, { useState, useEffect } from "react"; 
import Header from "./Header.jsx"
import PodcastCard from "./PodcastCards.jsx"
import { genres } from "./Data.js"
import "./index.css"


export default function App() {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(function () {
        fetch("https://podcast-api.netlify.app/")
    })

    const genreData = genres.map(function (genre) {
        return <PodcastCard genre={genre.title} key={genre.id} />
    })
    return (
        <>
            <Header></Header>
            <main id="podcast-grid" className="grid">
                {genreData}
            </main>
        </>    
    )
}
