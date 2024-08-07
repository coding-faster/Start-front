import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import RouterPage from './router/RouterPage'; 
import { useLocation } from 'react-router-dom';




const MenuPage = () => {



    const logout = (e) => {

        sessionStorage.clear();

        alert("로그아웃 하시겠습니까?")
        window.location.href = '/bbs'
    }
    // const mypage = (e) =>{
    //     window.location.href = '/users/mypage'
    // }

    const uid = sessionStorage.getItem('uid');
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/bbs" className={pathname === '/bbs' && 'active'}>
                            게시판
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {uid ? (
                            <>
                                <Nav.Link href="#" onClick={logout} className={pathname === '/logout' ? 'active' : ''}>
                                    로그아웃
                                </Nav.Link>
                                <Nav.Link href="/users/mypage" className={pathname === '/users/mypage' ? 'active' : ''}>
                                    마이페이지
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href="/login" className={pathname === '/login' ? 'active' : ''}>
                                로그인
                            </Nav.Link>
                        )}
                    </Nav>
                    )


                </Container>

            </Navbar>

            <RouterPage/>
        </>
    )
}

export default MenuPage