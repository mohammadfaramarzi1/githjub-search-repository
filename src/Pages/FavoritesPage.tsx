import { RootState } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import { useSelector } from 'react-redux'

function FavoritesPage() {

  const favorites = useSelector((state: RootState) => state.favorites)
  console.log(favorites)

  return (
    <div>FavoritesPage</div>
  )
}

export default FavoritesPage