import React from 'react'

const TicketCard = ({ ticket }) => {
  return (
    <div className='ticket-card'>
        <div >
            <span>{ticket.date}</span>
        </div>
        <div>
            <h5>{ticket.title}</h5>
        </div>
        <div>
            <span>{ticket.time}</span>
        </div>
        <div style={{display: "flex", gap: '20px', alignItems: 'center'}}>
            <span>View More <i class="fa-solid fa-arrow-up" style={{color: "#000000", rotate: "45deg"}}></i></span>
            <button>Get Tickets</button>
        </div>
    </div>
  )
}

export default TicketCard