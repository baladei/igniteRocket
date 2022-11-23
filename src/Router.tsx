import { Routes, Route } from "react-router-dom";
import { Videodois } from "./components/Videodois";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event/teste" element={<Videodois />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    );
}