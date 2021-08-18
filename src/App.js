import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
function App() {
  return (
    <>
    <div className="center">
    <ProfilePhoto></ProfilePhoto>
    <FullName></FullName>
    <Address></Address>
    </div>
    </>
  );
}

export default App;
