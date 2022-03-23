import React, { memo } from 'react'
import './timer.css'

const Dots = () => (
    <>
        <div className="vot__header-timer__dots" >
            <div></div>
            <div></div>
        </div>
    </>
) 

export default memo(function Timer({days, hours, minutes, seconds}) {
    return (
        <div className="vot__header-timer" >
            <div className="vot__header-timer-content">
                <div className="vot__header-timer-content__div">
                    <h3>Day</h3>
                    <div>
                        <p>{days}</p>
                    </div>
                </div>
                <Dots />
                <div className="vot__header-timer-content__div">
                    <h3>Hour</h3>
                    <div>
                        <p>{hours}</p>
                    </div>
                </div>
                <Dots />
                <div className="vot__header-timer-content__div">
                    <h3>Minute</h3>
                    <div>
                        <p>{minutes}</p>
                    </div>
                </div>
                <Dots />
                <div className="vot__header-timer-content__div">
                    <h3>Second</h3>
                    <div>
                        <p>{seconds}</p>
                    </div>
                </div>
            </div>
        </div>
    )
})
