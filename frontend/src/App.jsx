import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Workspaces from "./pages/Workspaces";
import Tickets from "./pages/Tickets";
import Overdue from "./pages/Overdue";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/overdue" element={<Overdue />} />
      </Routes>
      <footer>
        <div className="container mx-auto">
          Footer
        </div>
      </footer>
    </>
  );
}

export default App;
