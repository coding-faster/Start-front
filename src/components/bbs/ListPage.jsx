import React, { useEffect, useState } from 'react'
import '../Paging.css'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ListPage = () => {
    const [list, setList] = useState([]);




    const callAPI = async () => {
        const res = await axios.get('/bbs/list');
        console.log(res.data);
        setList(res.data);
    }
    useEffect(() => {
        callAPI();
    }, [])


    return (
        <div className='my-5'>
            <h1 className='text-center my-5'>게시판</h1>
            <Table>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>글제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                {list.map(list =>
                    <tr>
                        <td><a>{list.bid}</a></td>
                        <td><a href={`/bbs/read/${list.bid}`}>{list.title}</a></td>
                        <td>{list.writer}</td>
                        <td>{list.regDate}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>


    )
}

export default ListPage