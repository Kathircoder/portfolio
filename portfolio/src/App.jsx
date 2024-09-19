import Profile from './assets/pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './assets/pages/Projects'
import Contact from './assets/pages/contact'
import WebLayout from "./layouts/WebLayout"
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element = { <WebLayout /> }> 
                        <Route path="/" element={ <Profile /> } />
                        <Route path="/projects" element={ <Projects /> } />
                        <Route path="/contact" element={ <Contact /> } />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App