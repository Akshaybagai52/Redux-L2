import React from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data)
  }
  const onError = (err) => {
    console.warn('Something went wrong while getting super heroes', err);
  }
  const { isLoading, data, isError, error } = useSuperHeroesData(onSuccess, onError)
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