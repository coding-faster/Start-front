import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import ListPage from '../bbs/ListPage'
import LoginPage from '../users/LoginPage'
import BBSRouterPage from './BBSRouterPage'
import UserRouter from './user/UserRouter'

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/bbs" element={<ListPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path='/bbs/*' element={<BBSRouterPage/>}/>
      <Route path='/users/*' element={<UserRouter/>}/>
    </Routes>
  )
}

export default RouterPage