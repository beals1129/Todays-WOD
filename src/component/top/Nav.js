import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../../assets/images/arrow_left.png'
import ArrowRight from '../../assets/images/arrow_right.png'
import BookMarkNone from '../../assets/images/icon_bookmark_none.png'

const NavWarp = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate( -50%, -50%);
display: flex;
justify-content: center;
align-items: center;
`

const DayNav = styled.div`
width: 155px;
padding :0 15px;
margin: 30px 40px;
display: flex;
justify-content: space-between;
align-items: center;
`
const LeftBtn = styled.button`
font-size: 0;
width: 8px;
height: 13px;
background-image: url(${ArrowLeft});
background-position: 100% 100%;
background-repeat: no-repeat;
background-size: cover;
`
const RightBtn = styled.button`
font-size: 0;
background-image: url(${ArrowRight});
width: 8px;
height: 13px;
background-position: 100% 100%;
background-repeat: no-repeat;
background-size: cover;
`
const DateText = styled.p`
  font-family: "WorkSans-Bold";
  font-weight: 700;
text-align: center;
letter-spacing: -0.02em;
font-size: 20px;
`
const BookmarkDiv = styled.button`
width: 40px;
height: 40px;
border: none;
background-color: var(--floating-white-color);
border-radius: 10px;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

`
const NoneDiv = styled.div`
width:40px;
height: auto;
`

const Nav = () => {
    const todayDate = new Date();
    return (
        <NavWarp>
            <NoneDiv></NoneDiv>
            <DayNav>
                <LeftBtn>이전</LeftBtn>
                <DateText>
                    {todayDate.getFullYear()}. <br /> {todayDate.getMonth() < 10 ? '0' + todayDate.getMonth() : todayDate.getMonth()}

                </DateText>
                <RightBtn>다음</RightBtn>
            </DayNav>
            <BookmarkDiv >
                <img src={BookMarkNone} />
            </BookmarkDiv>

        </NavWarp>
    );
};

export default Nav;