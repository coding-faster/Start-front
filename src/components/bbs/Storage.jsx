//배운내용

import axios from 'axios';
import React, { useState } from 'react'
import { InputGroup,Form, Button } from 'react-bootstrap'

const BBSInsertPage = () => {
    // const [uid,setUid] = useState();
    // const [title, setTitle]= useState();
    // const [contents, setContents] = useState();
    const [form, setForm] = useState({
        writer:'',
        subject:'2',
        object:''
    });
    // console.log(form.object,form.subject);
    const onSubmit = async()=>{
       
        const res= await axios.post('/bbs/', form);
        console.log(res.data);
        alert("눌림")
    }
    
    const onChange = (e) =>{
        setForm( {...form, [e.target.name]:e.target.value} );
    }
    
  return (
    <div className='text-center'>
        <h1>글쓰기 페이지</h1>

        <form >
            {/* submit = enter로 쳐도 가고
            onclick = 클릭해야 감 */}
        <InputGroup>
                <InputGroup.Text > 제목 </InputGroup.Text>
                <Form.Control 
                name='subject'
                value={form.subject}
                onChange={onChange}
                />
                
                
        </InputGroup>

        <InputGroup>
                <InputGroup.Text > 내용 </InputGroup.Text>
                <Form.Control 
                    as='textarea' rows={10}
                    name='object'
                    value = {form.object}
                    onChange={onChange}

                />
            
                
                
        </InputGroup>
        
        <div className='text-end'>
        <Button onSubmit={onSubmit} type='submit' >글쓰기</Button>
        </div>

        </form>
    </div>
    
  )
}

export default BBSInsertPage



//주한이가 해준 내용



import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'


const BBSInsertPage = () => {
        const res= await  axios.post('/bbs/login')
    // const user = sessionStorage.getItem('uid');
    // const [form,setForm] = useState({
    //     writer:user,
    //     title:'',
    //     contents:''
    // });

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


