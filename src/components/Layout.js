import React from 'react'

// Components
import Header from './Header'

const Layout = props => {

    return (
        <div className='page-layout'>
            <Header {...props} />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout
