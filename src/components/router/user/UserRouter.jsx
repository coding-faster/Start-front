import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPage from '../../bbs/MyPage'

const UserRouter = () => {
  return (
    <Routes>
    {/* <Route path='/read/:uid' element={<ReadPage/>}/> */}
    <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
  )
}

export default UserRouter