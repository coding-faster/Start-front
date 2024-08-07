import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const BBSUpdatePage = () => {
    const [page, setPage] = useState(2);

    const { bid } = useParams();

    const [line, setLine] = useState({
        
        title: '',
        contents: ''
    });
    const { title, contents } = line;

    const callAPI = async () => {
        console.log(bid);
        const res = await axios.get(`/bbs/${bid}`);
        console.log(res.data);
        setLine(res.data);
    }


    useEffect(() => {
        callAPI();
    }, [bid]);

    const onClickSave = () => {

    }

    const onChangeLine = (e) => {
        setLine({ ...line, [e.target.name]: e.target.value })
    }

    const onClickUpdate = async(e)=>{

        await axios.put(`/bbs/`, line,bid);
        alert("수정눌림")
        window.location.href='/bbs'
        
    }


    return (
        <div >
            <div className='text-center'>
                <h1>수정페이지</h1>
            </div>

            <Row className='justify-content-center'>
                <Col md={8}>
                    <form>
                        <Card.Header>
                            <>
                                <InputGroup>
                                    <InputGroup.Text>제목</InputGroup.Text>
                                    <Form.Control
                                        value={title}  name='title' onChange={onChangeLine}
                                    />
                                </InputGroup>
                                
                            </>
                        </Card.Header>
                        <Card.Body className='text-center'>
                            <InputGroup>
                        <InputGroup.Text>내용</InputGroup.Text>
                                <Form.Control
                                    as='textarea'  name='contents' value={contents} onChange={onChangeLine}
                                />

                                </InputGroup>
                        </Card.Body>
                    </form>
                </Col>
            </Row>
            <br />

            <div className='text-end'>
                <Button className='btn btn-info' onClick={onClickUpdate}

                >글수정</Button>
                <Button className='btn btn-info'
                >수정취소</Button>
                <Button className='btn btn-danger'

                >글삭제</Button>

            </div>
            <br />
            <br />
            <br />


        </div>
    )
}

export default BBSUpdatePage