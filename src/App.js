import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import ReviewById from "./components/ReviewById";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<ReviewList></ReviewList>}></Route>
        <Route
          path="/reviews/:review_id"
          element={<ReviewById></ReviewById>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
