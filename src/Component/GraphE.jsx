import React from 'react'

import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import "./GraphE.css"

export const GraphE = () => {
  ;



// const totalTime_A = 160
const time_A = 30

// const totalTime_B = 180
const time_B = 40

// const totalTime_C = 160
const time_C = 50

// const totalTime_D = 140
const time_D = 60

const totalTime = parseInt(time_A) + parseInt(time_B) + parseInt(time_C) + parseInt(time_D) 
// const percentageA = (parseInt(time_A)/parseInt(totalTime_A))*100
// const percentageB = (parseInt(time_B)/parseInt(totalTime_B))*100
// const percentageC = (parseInt(time_C)/parseInt(totalTime_C))*100
// const percentageD = (parseInt(time_D)/parseInt(totalTime_D))*100


const percentageA = (parseInt(time_A)/parseInt(totalTime))*100
const percentageB = (parseInt(time_B)/parseInt(totalTime))*100
const percentageC = (parseInt(time_C)/parseInt(totalTime))*100
const percentageD = (parseInt(time_D)/parseInt(totalTime))*100
console.log(percentageA);
  const data = [
  
    {
      name: 'OTHER',
      time: time_A,

      fill: '#0084c7',
    },
    {
      name: 'Cardio AND Muscular',
      time: time_B,

      fill: '#0b9f91',
    },
    {
      name: 'Muscular',
      time: time_C,

      fill: '#8bc226',
    },
    {
      name: 'Cardio',
      time: time_D,

      fill: '#f9a300',
    },
    

  ];






  return (
    <>
      <div className="container">
        <h2 id='graphe_title'>Exercise Days since beginning</h2>
        <div className="graphE_Body">
          
          <div className='box1'>
          <ResponsiveContainer>
            <RadialBarChart width={400} height={400} data={data}
              innerRadius="20%" outerRadius="70%" startAngle={90} endAngle={360}>
              <RadialBar dataKey="time" label={false}  anticlockWise />
              <Legend  width={100} height={350} layout="radial" verticalAlign='middle' align="right"  />
              {/* <Tooltip /> */}
            </RadialBarChart>
            </ResponsiveContainer>
          
          </div>
          <div className='box2'>
            <div className='flexE_a'>
              <h3>{`${percentageD.toFixed(0)}%`}</h3>
              <div className='flexa'>
                <h6>CARDIO</h6>
                <p>Total days of since the beginning: {time_A}</p>
              </div>
            </div>
            <div className='flexE_b'>
              <h3>{`${percentageC.toFixed(0)}%`}</h3>
              <div className='flexb'>
                <h6>Muscular</h6>
                <p>Total number of days since the beginning: {time_B}</p>
              </div>
            </div>
            <div className='flexE_c'>
              <h3>{`${percentageB.toFixed(0)}%`}</h3>
              <div className='flexc'>
                <h6>Cardio AND Muscular</h6>
                <p>Total number of days since the beginning: {time_C}</p>
              </div>
            </div>
            <div className='flexE_d'>
              <h3>{`${percentageA.toFixed(0)}%`}</h3>
              <div className='flexd'>
                <h6>Other</h6>
                <p>Total number of days since the beginning : {time_D}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
