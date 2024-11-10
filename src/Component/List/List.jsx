import "./list.css"
import User from "./userINFO/User"
import ChatList from "./ChatList/ChatList"

const List = () => {
    return (
        <div className="list"> 
        <User/>
        <ChatList/>
        </div>

    )
}

export default List;