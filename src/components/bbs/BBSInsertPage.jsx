import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'



const BBSInsertPage = () => {
    const user = sessionStorage.getItem('uid');
    const [form,setForm] = useState({
        writer:user,
        title:'',
        contents:''
    });

    const onChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onClickSave =  async(e)=>{

        
        const res= await axios.post('/bbs/', form);
        window.location.href='/bbs';
        alert("저장됩니다.")
    }


  return (
    <div>
        <h1 className='text-center'>글쓰기 페이지</h1>
        
        <form >
            <div>
                작성자아이디: {user}
            </div>
        <InputGroup>
            <InputGroup.Text>
                제목: 
            </InputGroup.Text>
            <Form.Control

                name='title'
                value={form.title}
                onChange={onChange}
            />    
        </InputGroup>

        <InputGroup>
            <InputGroup.Text>
                내용: 
            </InputGroup.Text>
            <Form.Control
                as='textarea' 
                rows={6}
                name='contents'
                value={form.contents}
                onChange={onChange}

            />    
        </InputGroup>
        <div className='text-end'>
        <Button onClick={onClickSave}>글쓰기 </Button>
        </div>
        </form>
    </div>
  )
}

export default BBSInsertPage