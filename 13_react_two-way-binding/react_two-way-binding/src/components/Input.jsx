/* eslint-disable react/prop-types */
import { useState } from 'react'

export const Input = ({onChange}) => {
    const [value, setValue] = useState()

    const handleChange = (event) => {
        setValue(event.target.value)
        onChange(event)
    }

    return (<input type="text" value={value} onChange={handleChange}></input>)
}
