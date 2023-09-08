import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompProfile from './Components/Navbar/NavbarCompProfile';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import EventsAll from './Events/EventsAll';
import NavbarComp from './Components/Navbar/NavbarComp';
import EventsMusic from './Events/EventsMusic';
import EventsSports from './Events/EventsSports';
import TaylorSwiftInfo from './TaylorSwiftInfo/TaylorSwiftInfo';
import Details from './BuyingPage/Details';
import Seating from './BuyingPage/Seating';
import Payment from './BuyingPage/Payment';



function App() {
  return (
    <div className="App">
      <header>
        <NavbarComp/>
      </header>
      
      <main>
        <Payment/>
      </main>

    </div>
  );
}

export default App;
