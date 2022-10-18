import React from 'react';
import styled from 'styled-components';
import Bottom from '../component/bottom/Bottom';
import Header from '../component/Header';
import Top from '../component/top/Top';

const HomeCompo = styled.div`
font-family: "WorkSans-Regular", Arial, Helvetica, sans-serif;
box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--font-black-color);
`
const Home = () => {
    return (
        <HomeCompo>
            <Header />
            <Top />
            <Bottom />
        </HomeCompo>
    );
};

export default Home;