import React, { useState, useEffect } from 'react'
import { RingProgress } from '@ant-design/plots';
import "./GraphF.css"

export const GraphF = () => {
    const dayA = 146
    const normaldayA = 120

    const dayB = 150
    const normaldayB = 90

    const dayC = 170
    const normaldayC = 50

    const dayD = 120
    const normaldayD = 90
  
    const total_day = parseInt(normaldayA)+parseInt(normaldayB)+parseInt(normaldayC)+parseInt(normaldayD)
// calculation

    // const dataA = ((parseInt(normaldayA)/parseInt(dayA)))
    const dataA = ((parseInt(normaldayA)/parseInt(dayA)))
    const perA = (((normaldayA)/parseInt(dayA))*100).toFixed(1)

    const dataB = ((parseInt(normaldayB)/parseInt(dayB)))
    const perB = ((parseInt(normaldayB)/parseInt(dayB))*100).toFixed(1)

    const dataC = ((parseInt(normaldayC)/parseInt(dayC)))
    const perC = ((parseInt(normaldayC)/parseInt(dayC))*100).toFixed(1)

    const dataD = ((parseInt(normaldayD)/parseInt(dayD)))
    const perD = ((parseInt(normaldayD)/parseInt(dayD))*100).toFixed(1)



    const configA = {
        height: 250,
        width: 250,
        // autoFit: true,
        percent: dataA,
        color: ['#8fd946', '#bfbfbf'],
        innerRadius: 0.5,
        radius: 0.98,
    };
    const configB = {
        height: 250,
        width: 250,
        // autoFit: true,
        percent: dataB,
        color: ['#f9c206', '#bfbfbf'],
        innerRadius: 0.5,
        radius: 0.98,
    };
    const configC = {
        height: 250,
        width: 250,
        // autoFit: true,
        percent: dataC,
        color: ['#8dddfe', '#bfbfbf'],
        innerRadius: 0.5,
        radius: 0.98,
        axis: {
            label: {
                formatter: () => {

                }
            }
        },
    }
    const configD = {
        height: 250,
        width: 250,
        // autoFit: true,
        percent: dataD,
        color: ['#ff0000', '#bfbfbf'],
        innerRadius: 0.5,
        radius: 0.98,
        axis: {
            label: {
                formatter: () => {

                }
            }
        },
    }




    return (
        <>
            <div className="container mt-5">
                <div className="boxf">
                    <div className="boxf_a">
                        <RingProgress {...configA} />
                        <div className='posi_fa'><h4>{normaldayA}</h4></div>
                        <div className="content_fa"><p>Total number of <strong>NORMAL</strong> days.</p></div>
                    </div>
                    <div className="boxf_b">
                        <RingProgress {...configB} />
                        <div className='posi_fb'><h4>{normaldayB}</h4></div>
                        <div className="content_fa"><p>Total number of <strong>BUSINESS TRIPS</strong> days.</p></div>
                    </div>
                    <div className="boxf_c">
                        <RingProgress {...configC} />
                        <div className='posi_fc'><h4>{normaldayC}</h4></div>
                        <div className="content_fa"><p>Total number of <strong>VACATION</strong> days.</p></div>
                    
                    </div>
                    <div className="boxf_d">
                        <RingProgress {...configD} />
                        <div className='posi_fd'><h4>{normaldayD}</h4></div>
                        <div className="content_fa"><p> Total number of <strong>CHEAT</strong> days. </p></div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
