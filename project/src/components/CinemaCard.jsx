import React from 'react'

const CinemaCard = ({ cinema }) => {
    console.log(cinema)
  return (
    <div className='cinema-card'>
        <img src={cinema.image} alt="" />
        <p>{cinema.title}</p>
        <span>${cinema.price}</span>
    </div>
  )
}

export default CinemaCard