import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import Button from './components/Button';
function App() {
  const user = { name: "Faizan", email: "abc@123" };
  const onclick = () => {
    console.log("clicked");
  }
  const label = "Click Me";
  return (
    <>
    <UserProfile user={user}/>
    <Button onclick={onclick} label={label}/>
    </>
    
  );
}

export default App;
