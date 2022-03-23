import React, { memo } from 'react'
import './textinput.css'

export default memo(function TextInput({type, placeholder}) {
    return (
        <div>
            <input type={type} placeholder={placeholder} />
        </div>
    )
})
