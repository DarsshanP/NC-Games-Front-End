import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/reviews" element={<ReviewList></ReviewList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
