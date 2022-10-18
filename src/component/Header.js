import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
    width: 100%;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
`

const HeaderWrap = styled.div`
max-width: 1600px;
padding : 0 80px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    & h2 {
        text-align: center;
        font-size: 20px;
    }
`
const FlexDiv = styled.div`
width: 50px;
`
const LoginBtn = styled.div`
    width: 50px;
    text-align: center;
    
`
const Header = () => {
    return (
        <Warp>
            <HeaderWrap>
                <FlexDiv></FlexDiv>
                <h2>Today's WOD</h2>
                <LoginBtn>Login</LoginBtn>
            </HeaderWrap>
        </Warp>

    );
};

export default Header;