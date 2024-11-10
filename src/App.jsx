import Chat from "./Component/Chat/Chat";
import Detail from "./Component/Details/Detail";
import List from "./Component/List/List";
import Login from "./Component/login/Login";
import Notification from "./Component/Notification/Notification";

const App = () => {

  const user = false;
  

  return (
    <div className='container'>

    {user ? (
      <>
      <List/>
      <Chat/>
      <Detail/>

      </>
    ):(
      <Login/>
    )}
    <Notification/>
      
    </div>
  )
}

export default App