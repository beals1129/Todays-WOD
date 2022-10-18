import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createWod, deleteWod, getAllWod } from '../service/Service';
import BtNav from './BtNav';
import Content from './Content';
import Write from './Write';
const Container = styled.div`
max-width: 1600px;
padding : 0 80px;
margin: 30px auto 0;
display: flex;
position: relative;
`
const LeftContainer = styled.div`
width: 100px;
`
const MainContainer = styled.div`
height: 100px;
width: calc(100% - 100px);
`
const Bottom = () => {
    const [wods, setWods] = useState([])
    const [wodShelf, setWodShelf] = useState({})

    useEffect(() => {
        getAllWod()
            .then(data => {
                setWods(data)
            })
    }, [])
    const handleWodSubmit = () => {
        createWod(wodShelf)
        window.location.reload();
    }

    const handleMessageChange = (event) => {
        const textAreaData = wodShelf
        if (event.target.name === 'body') {
            wodShelf.body = event.target.value
        }
        setWodShelf(textAreaData)
    };


    console.log(wods)
    const wodsReverse = [...wods.reverse()]
    return (
        <Container>
            <LeftContainer>
                <BtNav />
            </LeftContainer>
            <MainContainer>
                <Write handleWodSubmit={handleWodSubmit} getAllWod={getAllWod} handleMessageChange={handleMessageChange} />
                {
                    wodsReverse.map((wod, idx) => {
                        return (<Content key={idx} id={idx} text={wod.body} date={wod.createDate} handleWodSubmit={handleWodSubmit} />)
                    })
                }

            </MainContainer>
        </Container>
    );
};

export default Bottom;