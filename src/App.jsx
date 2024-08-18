import "./App.css";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Nav from "./components/Nav";

function App() {
    return (
        <div>
            <Nav />
            <main>
                <Hero />
                <Locations />
                <Benefits />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
