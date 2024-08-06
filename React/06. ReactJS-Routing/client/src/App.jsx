import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home"
import Pricing from "./components/Pricing";
import About from "./components/About";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import NotFound from './components/NotFound';
import OurTeam from "./components/OurTeam";
import Mission from "./components/Mission";
import ContactUs from "./components/ContactUs";

function App() {
    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path='mission' element={<Mission />} />
                    <Route path='our-team' element={<OurTeam />} />
                    <Route path='contact-us' element={<ContactUs />} />
                </Route>
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:articleId" element={<ArticleDetails />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
