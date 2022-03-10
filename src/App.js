import React from 'react'
import { useRoutes } from 'react-router-dom'
import ReturnSampah from './pages/ReturnSampah'

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <ReturnSampah /> },
    { path: '/return-sampah', element: <ReturnSampah /> },
  ])
  return routes
}
export default App
