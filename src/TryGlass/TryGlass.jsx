import React, { useState } from 'react'
import data from '../data/data.json'
import '../StyleScss/style.scss'

export const TryGlass = () => {

  const [state, setState] = useState(
    {
      glassesCurrent: {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

      }
    }
  )

  const renderGlass = () => {
    return data.map((glassesItem, index) => {
      return <img key={index} 
                  className='w-[100px] ml-1 p-2 border-white border-spacing-2 cursor-pointer' 
                  src={glassesItem.url}
                  onClick={()=>{
                    setState({glassesCurrent: glassesItem})
                  }} />
    })
  }

  return (
    <div className='try-glass'>
      <div className='bg-image '>
        <div className='overplay'>
          <h2 className='text-center text-white uppercase text-3xl font-bold tracking-wider bg-cyan-900 p-5'> try glasses app online</h2>
          <div className="container img-model">


            <div className="left-img relative">
            <img  className='absolute' src="./glassesImage/model.jpg" alt="" />
              <img className='absolute glasses-style' src={state.glassesCurrent.url} alt="" />
              <div className=' absolute glass-infor'>
                <h3 className='font-bold'>{state.glassesCurrent.name}</h3>
                <p className='text-sm'>{state.glassesCurrent.desc}</p>
              </div>
            </div>
            <div className='right-img relative'>
            <img  src="./glassesImage/model.jpg" alt="" />

            </div>

            <div className='container  glasses-list'>
              {renderGlass()}
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}
