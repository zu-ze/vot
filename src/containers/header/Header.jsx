import React, { memo } from 'react'
import { Navigation, Timer } from '../../components'
import './header.css'

export default memo(function Header() {
    return (
        <div className="vot__header">
            <Navigation />            
            <Timer days="00" hours="00" minutes="00" seconds="00" />
            <div className="vot__header-text" >
                <h1 className="gradient__text">Till Election Starts</h1>
            </div>
            <div className="vot__header-btn" >
                <button type="button" >Start Voting</button>
            </div>
        </div>
    )
})
