import React, { Component } from 'react'
import Info from "./Info";

export default class Components extends Component {

    state = {
        blocks: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                image: "https://thumbs.dreamstime.com/b/autumn-subaru-impreza-wrx-sti-racecar-sport-car-subaru-impreza-wrx-sti-racecar-sport-car-105255865.jpg",
                button: 'button1'
            },
            {
                id: 2,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                image: "https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200",
                button: 'button2'
            },
            {
                id: 3,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                image: "https://www.cnet.com/a/img/resize/50e11858414030f7ace1dd3d92f7d24e5f4c5ce8/hub/2023/01/17/91eb6502-7246-430f-aa5f-e99f7cdea3ac/rs-2024-chevrolet-corvette-e-ray-3lz-006.jpg?auto=webp&fit=crop&height=620&width=620",
                button: 'button3'
            }
        ],
        info: [],
    }

    handleClick = (item) => {
        this.setState ({
            info: [item]
        })
    }

    render() {
        const { blocks, info } = this.state;
        return (
            <div className='all'>
                <div className='allElemets'>
                    {blocks.map(item => {
                        return(
                            <div className='block' key={item.id}>
                            <h1>{item.text}</h1>
                            <img src={item.image} alt="" onClick={() => { this.handleClick(item)} }/>
                        </div>
                        )
                    })}
                </div>
                <Info info = {info}/>
            </div>
        )
    }
}
