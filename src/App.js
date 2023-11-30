import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
//import axios from "axios";
import Theme from "./components/layout/layout";
//import SigninForm from "./components/auth/signin";

const App = () => {
  return (
    <Router>
    <Theme />
  </Router>
  );
};

export default App;
