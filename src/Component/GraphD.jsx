import React from 'react'
import "./GraphD.css"
import imageD from "../Image/newImage.jpg"
import { useState } from 'react'

export const GraphD = () => {
    const [dnum, setDnum] = useState({
        a: "01",
        b: "02",
        c: "03",
        d: "04",
    })
    
  return (
    <>
    <div className="container">
        <div className='TitleD'><h3> Average Weight Differential in lbs per day</h3></div>
       <div className="d_content">
        <div className="image_d">
            <img src={imageD} alt="" />
            <div className='flex_dA'>
                <h4>{dnum.a}</h4>
                <h6>If you ONLY diet</h6>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde soluta accusamus harum optio illum odio eligendi. Similique pariatur sunt sit. Facere quam dicta quia ut sit pariatur impedit tempora natus.</p> */}
            </div>
            <div className='flex_dB'>
                <h4>{dnum.b}</h4>
                <h6>If you ONLY exercise</h6>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde soluta accusamus harum optio illum odio eligendi. Similique pariatur sunt sit. Facere quam dicta quia ut sit pariatur impedit tempora natus.</p> */}
            </div>
            <div className='flex_dC'>
                <h4>{dnum.c}</h4>
                <h6>If you don't diet AND you don't exercise</h6>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde soluta accusamus harum optio illum odio eligendi. Similique pariatur sunt sit. Facere quam dicta quia ut sit pariatur impedit tempora natus.</p> */}
            </div>
            <div className='flex_dD'>
                <h4>{dnum.d}</h4>
                <h6>If you diet AND exercise </h6>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde soluta accusamus harum optio illum odio eligendi. Similique pariatur sunt sit. Facere quam dicta quia ut sit pariatur impedit tempora natus.</p> */}
            </div>
        </div>
       </div>
    </div>
    </>
  )
}
