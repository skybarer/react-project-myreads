import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './containers/MainPage';
import { BrowserRouter} from "react-router-dom";

class BooksApp extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    )
  }
}

export default BooksApp
