import "./user.css"

const User = () => {
    return (
        <div className="userinfo">
            <div className="Users">
            <img src="avatar.png" alt=""/>
            <h2>Lakchika</h2>
            </div>
            <div className="Icon">
                <img src="./more.png" alt=""/>
                <img src="./video.png" alt=""/>
                <img src="./edit.png" alt=""/>
            </div>
        </div>
    )
}

export default User;