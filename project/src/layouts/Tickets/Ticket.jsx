import React, { useEffect, useState } from 'react'
import "./Ticket.scss"
import axios from 'axios';
import TicketCard from '../../components/TicketCard';
import useFetchData from '../../hooks/useFetch';

const Ticket = () => {
  const { data, loading, error } = useFetchData("tickets");

  return (
    <section style={{width: "100%", backgroundColor: "#ededed", paddingTop: "100px", paddingBottom: "100px"}}>
        <div style={{maxWidth: "95%", marginLeft: "auto", marginRight: "auto"}}>
            <h5>FESTIVAL PROGRAMME</h5>
            <div className="ticket-main-container">
            {loading ? (
                <p>Loading...</p>
                ) : error ? (
                <p>{error}</p>
                ) : (
                data.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))
            )}
            </div>
        </div>
    </section>
  )
}

export default Ticket