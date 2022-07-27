import './App.css';
import {Routes,Route, Link,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import Quotes from './components/Quotes';
import QuoteDetail from './components/QuoteDetail';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<nav >
          <ul >
            <li>
              <Link  to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/char/:char_id' element={<Detail/>}/>
      <Route path='/quotes/:quote_id' element={<QuoteDetail/>}/>
      <Route path='/quotes' element={<Quotes/>}/>

      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
