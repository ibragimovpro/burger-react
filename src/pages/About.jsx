import React from 'react'

const About = ({menuData}) => {
  return (
    <div className='menu'>
        <h1 className='menu-text'>
          выберите свой бургер
          </h1>

          <div className='menu-list'>
{
            menuData.map((item)=>{
              return(
              <div className="menu-cont">
              <div className="card">
                <div className="card-img">
                  <img src={item.img} alt="" />
                </div>
                <h4 className='card-text'>{item.title}</h4>
                <p>
                {item.desc}
                </p>
                
                <h3>{item.price}$</h3>
                <p className='gr'>
                {item.netto} gr
                </p>
                <button className='menu-button'>
                Заказать 🛒
                </button>
              </div>
                 
              </div>
                )
            })

          } 

      </div>
    </div>
  )
}

export default About