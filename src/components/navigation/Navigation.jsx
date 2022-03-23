import React, { memo } from 'react'
import './navigation.css'
import logo from '../../assets/logo.svg'

export default memo(function Navigation() {
    return (
        <div className="vot__header-navigation" >
            <div className="vot__header-navigation__logo" >
                <img src={logo} alt="logo" />
            </div>
            <div className="vot__header-navigation__links">
                <button>SignIn</button>
            </div>
        </div>
    )
})
