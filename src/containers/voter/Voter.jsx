import React, { memo } from 'react'
import './voter.css'
import voter from '../../assets/voter.png'

export default memo(function Voter() {
    return (
        <div className="vot__voter section__padding" >
            <div className="vot__voter-image" >
                <img src={voter} alt="checkbox tick" />
            </div>
            <div className="vot__voter-content" >
                <h1 className="gradient__text" >Your Vote Is Your Voice</h1>
                <p>We should be doing everything we can to <i>encourage</i>, rather than hinder, <i>participation</i> in our democracy.</p>
                <h3>A Million Reasons To Vote. What's Yours?</h3>
            </div>
        </div>
    )
})
