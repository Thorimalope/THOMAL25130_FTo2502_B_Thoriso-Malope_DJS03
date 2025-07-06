import Header from "./Header.jsx"
import PodcastCard from "./PodcastCards.jsx"
import "./index.css"


export default function App() {
    return (
        <>
            <Header></Header>
            <main id="podcast-grid" className="grid">
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
            </main>
        </>    
    )
}
