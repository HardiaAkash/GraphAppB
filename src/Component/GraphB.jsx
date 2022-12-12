import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Sector, Cell } from 'recharts';
import { PureComponent } from 'react';
import { Slider } from '@mui/material';
import imgB1 from "../Image/5lbsOrange.png"
import imgB2 from "../Image/5LbsYellow.png"
import imgB3 from "../Image/5LbsBlue.png"
import imgB4 from "../Image/5LbsGreen.png"
import imgB5 from "../Image/graphB5.png"
import "./GraphB.css"


export const GraphB = () => {

    const [diffA, setDiffA] = useState()
    const [diffB, setDiffB] = useState()
    const [diffC, setDiffC] = useState()
    const [diffD, setDiffD] = useState()

    const [displayDateA, setDisplayDateA] = useState()
    const [displayDateB, setDisplayDateB] = useState()
    const [displayDateC, setDisplayDateC] = useState()
    const [displayDateD, setDisplayDateD] = useState()
    const [displayDateE, setDisplayDateE] = useState()



    const initialWeight = 250
    const measuringdate = "11/23/2022"

    const measuringdate_parse = new Date(measuringdate)
    const display_init_date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(measuringdate))
    // for 5 steps (reducing 5lbs subtract by 25)
    // date format mm/dd/yyyy

    // if data is not available leave 0
    // eg const a = 0

    const a = 245
    const date_a = '12/02/2022'

    const date_a_parse = new Date(date_a)


    const b = 240
    const date_b = '12/15/2022'

    const date_b_parse = new Date(date_b)

    const c = 235
    const date_c = '12/25/2022'

    const date_c_parse = new Date(date_c)

    const d = 230
    const date_d = '01/18/2023'

    const date_d_parse = new Date(date_d)

    const e = 225
    const date_e = '01/20/2023'

    const date_e_parse = new Date(date_e)


    // const c = ''
    // const date_c = ''

    // const d = ''
    // const date_d = ''

    // const e = ''
    // const date_e = ''

    const [currentweight, setCurrentweight] = useState(initialWeight)
    const [date, setDate] = useState(measuringdate)




    const targetWeight = initialWeight - 25


    // calculation part
    useEffect(() => {

        if (initialWeight > a && a >= b && a != 0) {
            setCurrentweight(parseInt(a))
            setDate(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_a)))
            setDiffA((date_a_parse - measuringdate_parse) / (1000 * 3600 * 24))
            setDisplayDateA(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_a)))
        }
        if (initialWeight && a && a > b && b >= c && b != 0) {
            setCurrentweight(parseInt(b))
            setDate(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_b)))
            setDiffB((date_b_parse - date_a_parse) / (1000 * 3600 * 24))
            setDisplayDateB(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_b)))
        }
        if (initialWeight && a && b && b > c && c >= d && c != 0) {
            setCurrentweight(parseInt(c))
            setDate(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_c)))
            setDiffC((date_c_parse - date_a_parse) / (1000 * 3600 * 24))
            setDisplayDateC(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_c)))
        }
        if (initialWeight && a && b && c && c > d && d >= e && d != 0) {
            setCurrentweight(parseInt(d))
            setDate(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_d)))
            setDiffD((date_e_parse - date_d_parse) / (1000 * 3600 * 24))
            setDisplayDateD(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_d)))
        }
        if (initialWeight && a && b && c && d && d > e && e != 0) {
            setCurrentweight(parseInt(e))
            setDate(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_e)))
            setDisplayDateE(Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(Date.parse(date_e)))

        }
// console.log(currentweight);
    }, [a, b, c, d, e])




    return (
        <>
            <div className="container mt-5 scroll_x">


                <div className="boxslider">
                    <div className="rotatebox">
                        <Slider value={currentweight} step={5} marks min={targetWeight} max={initialWeight}
                            valueLabelDisplay="auto"
                            valueLabelFormat={`${currentweight}lbs on ${date}`}

                            disabled />
                    </div>
                    <img src={imgB1} alt="loading" className={initialWeight - 5 >= currentweight ? "imgB1" : "displaynone"} />
                    <img src={imgB2} alt="loading" className={initialWeight - 10 >= currentweight ? "imgB2" : "displaynone"} />
                    <img src={imgB3} alt="loading" className={initialWeight - 15 >= currentweight ? "imgB3" : "displaynone"} />
                    <img src={imgB4} alt="loading" className={initialWeight - 20 >= currentweight ? "imgB4" : "displaynone"} />
                    <img src={imgB5} alt="loading" className={initialWeight ? "imgB5" : "displaynone"} />
                    
                    <div className={initialWeight - 5 >= currentweight ? "a_posi" : "displaynone"}><p>{`-5Lbs in ${diffA} days`}</p></div>
                    <div className={initialWeight - 10 >= currentweight ? "b_posi" : "displaynone"}><p>{`-5Lbs in ${diffB} days`}</p></div>
                    <div className={initialWeight - 15 >= currentweight ? "c_posi" : "displaynone"}><p>{`-5Lbs in ${diffC} days`}</p></div>
                    <div className={initialWeight - 20 >= currentweight ? "d_posi" : "displaynone"}><p>{`-5Lbs in ${diffD} days`}</p></div>

                    <div className={initialWeight - 5 >= currentweight ? "a_date_posi" : "displaynone"}><p>{displayDateA}</p></div>
                    <div className={initialWeight - 10 >= currentweight ? "b_date_posi" : "displaynone"}><p>{displayDateB}</p></div>
                    <div className={initialWeight - 15 >= currentweight ? "c_date_posi" : "displaynone"}><p>{displayDateC}</p></div>
                    <div className={initialWeight - 20 >= currentweight ? "d_date_posi" : "displaynone"}><p>{displayDateD}</p></div>

                    <div className={initialWeight ? "init_yaxis" : "displaynone"} ><p>{initialWeight}</p></div>
                    <div className={initialWeight - 5 >= currentweight ? "a_yaxis" : "displaynone"} ><p>{a}</p></div>
                    <div className={initialWeight - 10 >= currentweight ? "b_yaxis" : "displaynone"}><p>{b}</p></div>
                    <div className={initialWeight - 15 >= currentweight ? "c_yaxis" : "displaynone"}><p>{c}</p></div>
                    <div className={initialWeight - 20 >= currentweight ? "d_yaxis" : "displaynone"}><p>{d}</p></div>
                    <div className={initialWeight - 25 >= currentweight ? "e_yaxis" : "displaynone"}><p>{e}</p></div>
                    <div className='yaxis_label'><p>Weight in LBS</p></div>

                    <div className={initialWeight ? "init_xaxis" : "displaynone"} ><p>{display_init_date}</p></div>
                    <div className={initialWeight - 5 >= currentweight ? "a_xaxis" : "displaynone"} ><p>{displayDateA }</p></div>
                    <div className={initialWeight - 10 >= currentweight ? "b_xaxis" : "displaynone"}><p>{displayDateB}</p></div>
                    <div className={initialWeight - 15 >= currentweight ? "c_xaxis" : "displaynone"}><p>{displayDateC}</p></div>
                    <div className={initialWeight - 20 >= currentweight ? "d_xaxis" : "displaynone"}><p>{displayDateD}</p></div>
                    <div className={initialWeight - 25 >= currentweight ? "e_xaxis" : "displaynone"}><p>{displayDateE}</p></div>
                    <div className='xaxis_label'><p>Dates</p></div>

                </div>


            </div>

        </>
    )
}
