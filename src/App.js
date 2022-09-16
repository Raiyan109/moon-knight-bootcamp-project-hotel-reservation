import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Navbar/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import SignUp from './components/Auth/SignUp/SignUp';
import Rooms from './components/Home/Rooms/Rooms';
import SingleRoom from './components/Home/SingleRoom/SingleRoom';
// import ChatBot from 'react-simple-chatbot';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Home />}></Route>
        <Route path='/rooms/' element={<Rooms />}></Route>
        <Route path='/rooms/:slug' element={<SingleRoom />}></Route>
        <Route path='*' element={<SingleRoom />}></Route>
      </Routes>
      {/* <ChatBot
        steps={[
          {
            id: '1',
            message: 'What do you want to go?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Cox Bazar', trigger: '4' },
              { value: 2, label: 'Pataya', trigger: '3' },
              { value: 3, label: 'Honululu', trigger: '3' },
            ],
          },
          {
            id: '3',
            message: 'Wrong answer, try again.',
            trigger: '2',
          },
          {
            id: '4',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
