// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Member from "./Member.jsx";
import Project from "./Project.jsx";

function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-2xl font-bold">トップページ</h1>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member" element={<Member />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}