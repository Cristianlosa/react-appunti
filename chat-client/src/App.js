import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './shared/Chat';
import HomeView from './views/HomeView';
import NotFound from './views/NotFound'


const NotFound = () => <div>PAGE NOT FOUND</div>;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} exact />
       <Route path="/chat" element={<Chat />} />
       <Route path="*" element={<NotFound />} exact />
      </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
