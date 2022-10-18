import React from 'react';
import styled from 'styled-components';
import Plus from '../Plus';
import BookMarkList from './BookMarkList';
import Nav from './Nav';

const Conatiner = styled.div`
max-width: 1600px;
padding : 0 80px;
margin: 0 auto;
display: flex;
position: relative;
`
const LeftContainer = styled.div`
width: 100px;
position: relative;
`
const MainContainer = styled.div`
height: 100px;
width: calc(100% - 100px);
`

const Top = () => {
    return (
        <Conatiner>
            <LeftContainer>
                <Plus />
            </LeftContainer>
            <MainContainer>
                <Nav />
                <BookMarkList />
            </MainContainer>


        </Conatiner>
    );
};

export default Top;