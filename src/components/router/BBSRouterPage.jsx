import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadPage from '../bbs/ReadPage'

const BBSRouterPage = () => {
  return (
    <Routes>
        {/* <Route path='/read/:uid' element={<ReadPage/>}/> */}
        <Route path='/read/:bid' element={<ReadPage/>}/>
    </Routes>
  )
}

export default BBSRouterPage