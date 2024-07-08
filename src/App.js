import React from "react";
import Banner from "./components/banner";
import Contents from "./components/contents";
import ThemedMode from "./components/themeMode";
import "./App.css";

export default function App() {
  return (
    <div className="App text-base">
      <ThemedMode />
      <Banner />
      <Contents />
    </div>
  );
}
