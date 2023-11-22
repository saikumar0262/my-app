
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Component/Auth';
import { Home } from './Component/Home';
import { People } from './Component/People'
import { Video } from './Component/Video'
import { Sport } from './Component/Sport'
import Login from './Component/Login';
import { RequiedAuth } from './Component/RequiedAuth';
import { Forgotten } from './Component/Forgotten';


function App ()
{

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <RequiedAuth><Home /></RequiedAuth> } />
          <Route path="people" element={ <People /> } />
          <Route path="video" element={ <Video /> } />
          <Route path="sport" element={ <Sport /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='forgotten' element={ <Forgotten /> } />
        </Routes>
      </Router>
    </AuthProvider>





  );
}

export default App;
