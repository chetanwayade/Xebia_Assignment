import React from 'react'

const Header = (props) => {
    
    const logout = () => {
        props.history.push("/");
    }

    return (
        <header>
            <div className="header-container">
                <ul className="flex items-center">
                    <li className="md-max:hidden">
                        <a className="button" href="" onClick={logout}>
                            <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" />
                            <div className="logout">LOGOUT</div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header