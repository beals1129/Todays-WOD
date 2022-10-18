import React from 'react';
import styled from 'styled-components';
import ArrowTop from '../../assets/images/arrow_top.png'

const NavBar = styled.div`
width: 80px;
margin: 0 auto;
height:  calc(100vh - 300px);
background-color: white;
background-color: var(--floating-white-color);
border-radius: 10px;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
`
const TopIcon = styled.button`
width: 80px;
height: 36px;

& span {
   
font-size: 0;
display: block;
    width: 13px;
    height: 8px;
    margin: 0 auto;
    background-image: url(${ArrowTop});
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
}
`
const TodayCircle = styled.div`
width: 54px;
height: 54px;
background-color: var( --point-yellow-color);
border-radius: 50%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
& span {
    font-size: 20px;
    font-weight: bold;
}
`
const BtNav = () => {
    const todayDate = new Date();
    return (
        <NavBar>
            <TopIcon><span>위로</span></TopIcon>
            <TodayCircle><span>{todayDate.getDate()}</span></TodayCircle>

        </NavBar>
    );
};

export default BtNav;