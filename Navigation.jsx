function Navigation(){
    return(
        <nav>
            <div className="image">
                <img src="/images/vite.svg" alt=""/>
                <img src="/images/react.svg" alt="" />
            </div>
            <div className="header">
                <ul type="none">
                    <li href="#">HOME</li>
                    <li href="#">ABOUT</li>
                    <li href="#">LOCATION</li>
                    <li href="#">CONTACT</li>
                </ul>
            </div>
            <button>Login</button>
        </nav>
    )
}
export default Navigation;