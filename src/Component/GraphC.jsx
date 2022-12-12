import React from 'react'
import { Gauge, G2 } from '@ant-design/plots';
import { useState } from 'react';
import "./GraphC.css"
import imgGraph from "../Image/BMIindicator.svg"

export const GraphC = () => {
    const [bmiIndex, setBmiIndex] = useState(0)
    const [data, setData] = useState({
        weight: "",
        height: "",
    })
    const [bmidata, setBmidata] = useState(0)
    const { registerShape, Util } = G2;

    registerShape('point', 'custom-gauge-indicator2', {
        draw(cfg, container) {

            const { indicator, defaultColor } = cfg.customInfo;
            const { pointer, pin } = indicator;
            const group = container.addGroup();

            const center = this.parsePoint({
                x: 0,
                y: 0,
            });

            if (pointer) {
                const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
                const radius = this.coordinate.getRadius();
                const midAngle = (startAngle + endAngle) / 2;
                const { x: x1, y: y1 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle + 1 / Math.PI);
                const { x: x2, y: y2 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle - 1 / Math.PI);
                const { x, y } = Util.polarToCartesian(center.x, center.y, radius * 0.65, midAngle);
                const { x: x0, y: y0 } = Util.polarToCartesian(center.x, center.y, radius * 0.1, midAngle + Math.PI);
                const path = [['M', x0, y0], ['L', x1, y1], ['L', x, y], ['L', x2, y2], ['Z']]; // pointer

                group.addShape('path', {
                    name: 'pointer',
                    attrs: {
                        path,


                        fill: defaultColor,
                        ...pointer.style,
                    },
                });
            }

            if (pin) {
                const pinStyle = pin.style || {};
                const { lineWidth = 2, fill = defaultColor, stroke = defaultColor } = pinStyle;
                const r = 9;
                group.addShape('circle', {
                    name: 'pin-outer',
                    attrs: {
                        x: center.x,
                        y: center.y,
                        ...pin.style,
                        fill: 'transparent',
                        r: r * 1.5,
                        lineWidth,
                        stroke: stroke,
                    },
                });
                group.addShape('circle', {
                    name: 'pin-inner',
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r,
                        stroke: 'transparent',
                        fill,

                    },
                });
            }

            return group;
        },
    });

    const Input_Handler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }

    const form_handler = (e) => {
        e.preventDefault()
        // put weight and height for calculation (weight in pound and height in inches)
        //    imperial  formula
        const bmi = ((Number(data.weight) / (Number(data.height) * Number(data.height)) * 703))
        setBmidata(bmi.toFixed(1))
        console.log(bmi.toFixed(1));
        if (bmi < 16) {
            setBmiIndex(0.05)
        }
        if (16 < bmi && bmi < 17) {
            setBmiIndex(.20)
        }

        if (17 < bmi && bmi < 18.5) {
            setBmiIndex(0.33)
        }
        if (18.5 < bmi && bmi < 25) {
            setBmiIndex(0.45)
        }
        if (25 < bmi && bmi < 30) {
            setBmiIndex(0.56)
        }
        if (30 < bmi && bmi < 35) {
            setBmiIndex(0.69)
        }
        if (35 < bmi && bmi < 40) {
            setBmiIndex(0.82)
        }
        if (bmi > 40) {

            setBmiIndex(0.95)
        }

        console.log(bmiIndex);
    }








    const config = {
        percent: bmiIndex,
        type: 'meter',
        Radius: 1,
        innerRadius: 0.6,
        meter: {
            steps: 8,
            stepRatio: 0.95,
        },
        range: {
            ticks: [0, 1 / 8, 2 / 8, 3 / 8, 4 / 8, 5 / 8, 6 / 8, 7 / 8, 8 / 8],
            color: ['#ff0100', '#ff7e01', '#fef900', "#01b6ff", "#33cc12", "#fef900", "#ff7e01", "#ff0100"],
        },
        axis: {
            label: {
                formatter: () => {

                }
            }
        },


        indicator: {
            shape: 'custom-gauge-indicator2',
            pointer: {
                style: {
                    stroke: '#ff0100',
                    lineWidth: 2,

                    fill: '#ff0100',

                },

            },
            pin: {
                style: {
                    lineWidth: 11,
                    stroke: '#000',
                    fill: '#000',
                },
            },
        },

    }
    return (
        <div className="container">
            <div className="boxc_flex">
                <Gauge  {...config} autoFit  />
               <img src={imgGraph} alt="" className='dd' />
            </div>
            <div>
                <input type="text" value={`BMI : ${bmidata}`} placeholder="BMI" disabled />
                <form onSubmit={form_handler} className='mt-5'>
                    <input type="number" name="weight" placeholder='weight in lbs' step=".01" onChange={Input_Handler} />
                    <input type="number" name="height" placeholder='height in inches' step=".01" onChange={Input_Handler} />
                    <input type="submit" value="calculate" className='btn btn-primary' />
                </form>
            </div>

        </div>
    )
}
