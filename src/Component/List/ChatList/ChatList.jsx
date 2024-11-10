import AddUser from "./AddUser/AddUser";
import "./chatList.css"
import { useState } from "react";


const ChatList = () => {
    const [addMode, setAddMode] = useState (false)
    return (
        <div className="chatList">
        <div className="search">
        <div className="searchBar">
            <img src="./search.png" alt=""/>
            <input type="text" placeholder="Search"/>
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" 
        className="Add"
            onClick={() => setAddMode((prev) => !prev)}
        />
        </div>
        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt=""/>
            <div className="text">
                <span>Lachchu</span>
                <p>Hii...!</p>
            </div>
        </div>
        {addMode && <AddUser/>}
        </div>
    )
}

export default ChatList;