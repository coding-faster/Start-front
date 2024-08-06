import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ReadPage = () => {
    const [page,setPage] = useState(2);
    
    const {bid} = useParams();

    const [line, setLine] = useState({
        uid:'',
        title:'',
        contents:''
    });
    const {uid, title,contents} =line;

    const callAPI = async()=>{
        const res= await axios.get(`/bbs/${bid}`);
        console.log(res.data);
        setLine(res.data);
    }

    
    useEffect(()=>{
        callAPI();
    },[bid]);
       
  return (
    <div className='text-center'>
        <h1>ReadPage</h1>
        <Row>
            <Col>
                <Card.Header>
                    <h5>{line.title}</h5>
                </Card.Header>
                <Card.Body>
                    <h5>{line.contents}</h5>
                </Card.Body>
            </Col>
        </Row>
        
    </div>
  )
}

export default ReadPage