import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CinemaCard from '../../components/CinemaCard';
import "./Cinema.scss"
import useFetchData from '../../hooks/useFetch';

const Cinema = () => {
    const { data, isLoading, error } = useFetchData("cinema");
    
  return (
    <section id='cinema'>
        <div className="cinema-main">
            <h1>POPULAR MOVIES</h1>
            <div className="cinema-main-container">
                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        data && data.map((cinema) => (
                            <CinemaCard key={cinema.id} cinema={cinema} />
                        ))
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Cinema