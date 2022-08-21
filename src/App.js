import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/excercise-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUsers from "./components/create-users.component";


function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar />
      <br />
      <Routes>
      <Route path="/" exact element={<ExcerciseList />} />
      <Route path="/edit/:id" element={<EditExcercise />} />
      <Route path="/create" element={<CreateExcercise />} />
      <Route path="/user" element={<CreateUsers />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
