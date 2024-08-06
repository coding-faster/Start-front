import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ListPage from './bbs/ListPage'
import LoginPage from './users/LoginPage'
import BBSRouterPage from './router/BBSRouterPage'

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/bbs" element={<ListPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path='/bbs/*' element={<BBSRouterPage/>}/>
    </Routes>
  )
}

export default RouterPage