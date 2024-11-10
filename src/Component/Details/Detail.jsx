import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>Lakchika</h2>
                <p>i'm fixing myself, because i understand sometimes i am the problem too</p>
            </div>

            <div className="info">

                <div className="option">
                <div className="title">
                    <span>Chat setting</span>
                    <img src="./arrowUp.png" />
                </div>
                </div>

                <div className="option">
                <div className="title">
                    <span>Privacy & help </span>
                    <img src="./arrowUp.png" />
                </div>
                </div>

                <div className="option">
                <div className="title">
                    <span>Shared Photos </span>
                    <img src="./arrowDown.png" alt=""/>
                </div>
                
                

                <div className="photos">
                
                    <div className="photoItem">
                    <div className="photoDetails">
                    <img src="https://th.bing.com/th/id/R.881bd1edabcf2c0b63f299d4e77ec045?rik=QJgYXpw%2bO9NfkQ&pid=ImgRaw&r=0" alt=""/>
                        <span>Image_2024_06_24.jpeg</span>
                    </div>
                        <img src="./download.png" className="icon"/>
                    </div>

                    <div className="photoItem">
                    <div className="photoDetails">
                    <img src="https://th.bing.com/th/id/R.881bd1edabcf2c0b63f299d4e77ec045?rik=QJgYXpw%2bO9NfkQ&pid=ImgRaw&r=0" alt=""/>
                        <span>Image_2024_06_24.jpeg</span>
                    </div>
                        <img src="./download.png" className="icon"/>
                    </div>

                    <div className="photoItem">
                    <div className="photoDetails">
                    <img src="https://th.bing.com/th/id/R.881bd1edabcf2c0b63f299d4e77ec045?rik=QJgYXpw%2bO9NfkQ&pid=ImgRaw&r=0" alt=""/>
                        <span>Image_2024_06_24.jpeg</span>
                    </div>
                        <img src="./download.png" className="icon"/>
                    </div>

                    <div className="photoItem">
                    <div className="photoDetails">
                    <img src="https://th.bing.com/th/id/R.881bd1edabcf2c0b63f299d4e77ec045?rik=QJgYXpw%2bO9NfkQ&pid=ImgRaw&r=0" alt=""/>
                        <span>Image_2024_06_24.jpeg</span>
                    </div>
                        <img src="./download.png" className="icon"/>
                    </div>

                    <div className="photoItem">
                    <div className="photoDetails">
                    <img src="https://th.bing.com/th/id/R.881bd1edabcf2c0b63f299d4e77ec045?rik=QJgYXpw%2bO9NfkQ&pid=ImgRaw&r=0" alt=""/>
                        <span>Image_2024_06_24.jpeg</span>
                    </div>
                        <img src="./download.png" className="icon"/>
                    </div>
                    </div>


                
            </div>

                <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrow.png"/>
                </div>
                </div>

                <button>Block User</button>
                <button className="logout">Log Out</button>

                
            </div>
            
        </div>
    )
}

export default Detail;