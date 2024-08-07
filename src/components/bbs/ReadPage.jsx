import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReplyPage from './ReplyPage';

const ReadPage = () => {
    const [page, setPage] = useState(2);

    const { bid } = useParams();

    const [line, setLine] = useState({
        uid: '',
        title: '',
        contents: ''
    });
    const { uid, title, contents } = line;

    const callAPI = async () => {
        const res = await axios.get(`/bbs/${bid}`);
        console.log(res.data);
        setLine(res.data);
    }


    useEffect(() => {
        callAPI();
    }, [bid]);


    const onClickDelete = async() => {
        try {

            if (!window.confirm("삭제하실래요?")) return;
            //삭제하기
            const res = await axios.delete(`/bbs/${bid}`);
            console.log(res.data);

        } catch (error) {
            alert("아.......에러다....");
        }
        alert("삭제되었습니다.")
    }

  

    return (
        <div >
            <div className='text-center'>
                <h1>ReadPage</h1>
            </div>

            <Row className='justify-content-center'>
                <Col md={8}>
                    <Card.Header>
                        <div className='text-center'>
                            <h5>[{bid}]{line.title}</h5>
                        </div>
                    </Card.Header>
                    <Card.Body className='text-center'>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                            {line.contents}
                        </div>
                    </Card.Body>
                </Col>
            </Row>
            <br />

            <div className='text-end'>
                <Link to={`/bbs/write/${bid}`}><Button className='btn btn-info'
                               
                >글수정</Button></Link>
                <Button className='btn btn-info'
                >수정취소</Button>
                <Button onClick={onClickDelete} className='btn btn-danger'

                >글삭제</Button>

            </div>
            <br />
            <br />
            <br />
            <ReplyPage />

        </div>
    )
}

export default ReadPage