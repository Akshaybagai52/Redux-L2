import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery('super-heroes', () => {
    return axios.get('http://localhost:400/superheroes')
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    select: (data) => {
      const superHeroNames = data.data.map(hero => hero.name)
      return superHeroNames;
    }
  })
  if (isLoading) {
    return <h2>Loading.....</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>RQSuperHeroes.page
      {/* {
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      } */}
      {
        data.map((heroName) => {
          return <div key={heroName}>{heroName} </div>
        })
       
      }
    </div>
  )
}

export default RQSuperHeroesPage