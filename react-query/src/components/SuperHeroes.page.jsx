import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:400/superheroes').then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])
    if(isLoading) {
        return <h2>Loading...</h2>
    }
  return (
    <div>
        <h2>Super Heroes Page</h2>
        {data.map((item) => {
            return <div key={item.name}>{item.name} </div>
        })}
    </div>
  )
}

export default SuperHeroesPage