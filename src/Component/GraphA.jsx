import React from 'react'
import { useState } from 'react'
import imageA from "../Image/grapha2.jpg"

import "./GraphA.css"


export const GraphA = () => {
    const [values, setValues] = useState({
        a: "50.8",
        b: "11.5",
        c: "20.1",
        d: "-10.2"
    })
const curr_weight = 151.6 

    return (
        <>
            <div className="container">
                <div className="graphA_content">
                    <div className='graphA_body'>
                        <img id='imgA' src={imageA} alt="" />
                        <div id='posi_1'><h1 >{values.a}</h1></div>
                        <div className='posi_p1'><p>Weight lost since starting Weight Wallet.</p></div>

                        <div id='posi_2'> <h1 >{values.b}</h1></div>
                        <div className='posi_p2'> <p>Weight left to lose to reach your ideal weight.</p></div>

                        <div id='posi_3'><h1>{values.c}</h1></div>
                        <div className='posi_p3'> <p >Days to  go IF you maintain your current habits.</p></div>

                        <div id='posi_4'><h1>{values.d}</h1></div>
                        <div className='posi_p4'><p>Ave. Weight difference per day</p></div>

                        <div className='center_contentA'>
                            <h4>{curr_weight}</h4>
                            <h5>Today's weight</h5>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam.</p> */}
                        </div>



                    </div>
                    

                </div>
            </div>
        </>
    )
}
