import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const LoginPage = () => {
    

    const [form, setForm] = useState({
        uid: '',
        upass: ''
    });
    const { uid, upass } = form

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const onClickLogin = async () => {

        // console.log(res);
        if (!uid || !upass) {
            alert("아이디와 비밀번호를 입력해주세요")

            return
        }
        try {
            const res = await axios.post('/user/login', { uid, upass });
            if (res.data === 1) {
                alert("로그인 성공");
                sessionStorage.setItem("uid", uid);
                window.location.href = '/bbs';

            } else if (res.data === 0) {
                alert("없는 아이디입니다.")
            } else if (res.data === 2) {
                alert("비밀번호가 틀렸습니다.")
            } else {
                alert("탈퇴한 회원입니다.");
            }

        } catch (error) {
            alert("오류가 발생하였습니다.");
        }

    } 

    const onClickJWTLogin = async()=>{
        if (!uid || !upass){
            alert("아이디와 비밀번호를 입력해주세요");
            return;
        }

        try{
            //1.로그인 요청 보낼 서버의 url
            const url= 'http://localhost:8080/user/JWTlogin';
            
            //2. 서버에 보낼 데이터 ( uid, upass)
            const userData = {
                uid: uid,
                upass : upass,

            };

            //3. 서버에 로그인 요청을 보냄 (post요청)
            const res= await axios.post(url, userData);

            // 4. 서버로부터 응답을 받음 ( JWT 토큰 포함)
            if (res.data.status ===1) {
                const token = res.data.token;  //서버로부터 받은 jmt토큰

                // 5. 받은 토큰을 localStorage에 저장
                localStorage.setItem('token', token);

                alert('JMT 로그 인 성공!');
                window.location.href='/bbs'// jmt 로그인 성공 후 이동
            }else if (res.data.status === 0){
                alert("없는 아이디입니다.");
            }else if (res.data.status === 2){
                alert("비밀번호가 틀렸습니다");
            }else{
                alert("탈퇴한 회원입니다.");
            }

        }catch (error){
            console.error('JMT 로그인 중 오류 발생', error);
            alert("JMT 로그인 중 오류 발생했네요");

        }

    }



    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>로그인</h1>
            <Row className='justify-content-center'>
                <Col xs={10} lg={4} md={6}>
                    <Card  >
                        <Card.Body className='my-3'>
                            <form>
                                <InputGroup>
                                    <InputGroup.Text>아이디</InputGroup.Text>
                                    <Form.Control placeholder='UserID' value={uid} name='uid' onChange={onChangeForm}></Form.Control>
                                </InputGroup>

                                <InputGroup>
                                    <InputGroup.Text>비밀번호</InputGroup.Text>
                                    <Form.Control type='password' placeholder='Password' value={upass} name='upass' onChange={onChangeForm}></Form.Control>
                                </InputGroup>
                            </form>
                        </Card.Body>

                        <Card.Footer className='text-end'>
                            <Button onClick={onClickLogin}>로그인</Button>
                            <Button onClick={onClickJWTLogin} >JWT로그인</Button>
                            <Button>회원가입</Button>
                        </Card.Footer>


                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default LoginPage