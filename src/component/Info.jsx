import React from 'react'

export default function Info(props) {
    console.log(props)
    return (
        
        <div className='inform'>
            {props.info.map(item => {
                return (
                    <div className='block' key={item.id}>
                        <h1>{item.text}</h1>
                        <img src={item.image} alt=""/>
                    </div>
                )
            })}
        </div>
    )
}
