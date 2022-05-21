
import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import EmptyPage from './components/emptyPage/EmptyPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [searchBook, setSearchBook] = useState([])
  return (
    <div className="app">
      <Header setSearchBook={setSearchBook} />
      <div className="book-container">
        {
          searchBook.length === 0 ? <EmptyPage />
            :
            <Content searchBook={searchBook} />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
