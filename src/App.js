import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import ReviewById from "./components/ReviewById";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
        <Route path="/reviews/:review_id" element={<ReviewById />}></Route>
        <Route path="/user" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
