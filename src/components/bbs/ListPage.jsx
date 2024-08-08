import React, { useEffect, useState } from 'react'
import '../Paging.css'
import axios from 'axios';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const ListPage = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [key, setKey] = useState('');
    const [word, setWord] = useState('');




    const callAPI = async () => {
        const res = await axios.get(`/bbs/list?size=${size}&page=${page}&key=${key}&word=${word}`);
        console.log(res.data);
        setTotal(res.data.total)
        setList(res.data.list);


    }
    useEffect(() => {
        callAPI();
    }, [page])

    const onclickSearch =(e)=>{
        e.preventDefault();
       callAPI();

    }

    return (
        <div className='my-5'>
            <h1 className='text-center my-5'>게시판</h1>
            <form onSubmit={onclickSearch}>
            <div>
                
                <InputGroup>
                <select value={key} onChange={(e)=>setKey(e.target.value)}>
                    <option value="title" >제목</option>
                    <option value="contents" >내용</option>
                    <option value="writer" >작성자</option>
                </select>
                <Form.Control
                    onChange={(e)=>{setWord(e.target.value)}}
                    value={word}
                />
               
                <Button type='submit'>검색</Button>
                </InputGroup>
            </div>
            </form>
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
            <div className='text-end'>
                <Link to='/bbs/write'><Button>글쓰기</Button></Link>
            </div>
            <Pagination
                activePage={page}
                itemsCountPerPage={size}
                totalItemsCount={total}
                pageRangeDisplayed={10}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={(e) => setPage(e)} />
        </div>


    )
}

export default ListPage