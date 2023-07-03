import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
    const [movie,setMovie]=useState([]);
    // fetchUrl={requests.fetchActionMovies, requests.fetchComedyMovies, requests.fetchDocumentaries};
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length)+1
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+"..." : string;
    }
  return (
    <div>
        <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }
        }
        >
            <div className='banner__contents'>
                <div className='banner__title'>
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                </div>
                <div className='banner__buttons'>
                    <button className="banner__button">Play</button>
                    <button className="banner__button">WatchList</button>
                </div>
                <h1 className='banner__description'>
                    {truncate(movie?.overview,100)}
                </h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    </div>
  )
}

export default Banner;