import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { testando } from "../components/Player";

export function Event () {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Player />
                <Sidebar />
            </main>
        </div>
    )
}