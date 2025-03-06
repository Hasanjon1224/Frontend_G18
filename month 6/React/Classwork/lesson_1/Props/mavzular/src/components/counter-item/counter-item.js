import React, { useEffect, useState } from 'react'

const CounterItem = ({ counterGenerate }) => {
    const [item, setItem] = useState([])


    useEffect(() => {
        const newItem = counterGenerate()
        console.log('remder')
        setItem(newItem)
    }, [counterGenerate])

    return (
        <ul className='list-unstyled'>
            {item.map((item) => (
                <li key={item.id}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default CounterItem
