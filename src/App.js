
import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [searchBook, setSearchBook] = useState([])
  console.log(searchBook)
  return (
    <div className="app">
      <Header setSearchBook={setSearchBook} />
      <div className="book-container">
        <Content searchBook={searchBook} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
