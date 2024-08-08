import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadPage from '../bbs/ReadPage'
import BBSInsertPage from '../bbs/BBSInsertPage'
import BBSUpdatePage from '../bbs/BBSUpdatePage'

const BBSRouterPage = () => {
  return (
    <Routes>
        {/* <Route path='/read/:uid' element={<ReadPage/>}/> */}
        <Route path='/read/:bid' element={<ReadPage/>}/>
        <Route path='/write/:bid' element={<BBSUpdatePage/>}/>
        <Route path='/write' element={<BBSInsertPage/>}/>
    </Routes>
  )
}

export default BBSRouterPage