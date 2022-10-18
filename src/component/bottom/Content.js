import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import bookmarkImg from '../../assets/images/icon_bookmark_15.png'
import IconModify from '../../assets/images/icon_modify.png'
import IconDelete from '../../assets/images/icon_delete.png'
import IconSave from '../../assets/images/icon_save.png'
import { deleteWod } from '../service/Service';
const Container = styled.div`
height: 250px;
position: relative;
width: calc(100% - 100px);
background-color: var( --floating-white-color);
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
margin: 0 54px;
border-radius: 10px;
padding: 30px 40px;
display: flex;
`
const Today = styled.div`
width: 50%;
padding-right: 10px;
`
const TodayWrap = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`
const TodayWodHeader = styled.p`
font-size: 16px;
font-weight: 700;
`
const BookMarkBtn = styled.button`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const TodayTextArea = styled.textarea`
display: block;
width: 100%;
    min-height: 150px;
    resize: none;
    border: 1px solid var(--font-black-color);
    border-radius: 5px;
    padding: 10px;
    &:disabled {
        border: none;
        background-color: transparent;
        padding: 0px;
        padding-top: 10px;
        padding-right: 10px;
    }
`

const More = styled.div`
padding-left: 10px;
width: 50%;
`

const BtnWrap = styled.div`
position: absolute;
top: 30px;
right: 40px;
display: flex;
`
const Btn = styled.button`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
transform: scale(0.8);
align-items: center;
margin: 0 5px;
`
const DateP = styled.p`
font-size: 11px;
line-height: 20px;
margin-right: 5px;
`
const DoneBtn = styled.button`
width: 20px;
height: 20px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 30px;
right: 40px;
font-size: 15px;
padding: 5px 10px ;
`
const Content = ({ id, text, date }) => {
    const [isWrite, setIsWrite] = useState(false)
    const [changeBody, setChangeBody] = useState({ text })
    const textChange = (e) => {
        changeBody(e.target.value)
    }

    const setModify = () => {
        setIsWrite(true)

    }
    const deleteWodChange = () => {
        deleteWod(id)
        window.location.reload();
    }
    const patchWod = () => {
        patchWod(id).
            setIsWrite(false)
        window.location.reload();
    }
    return (
        <Container>

            {isWrite ?
                null :
                <BtnWrap>
                    <DateP>{date}</DateP>
                    <Btn onClick={setModify}> <img src={IconModify} /></Btn>
                    <Btn onClick={deleteWodChange} >  <img src={IconDelete} /> </Btn>

                </BtnWrap>

            }

            <Today>
                <TodayWrap>
                    <TodayWodHeader>Today’s WOD</TodayWodHeader>
                    <BookMarkBtn><img src={bookmarkImg} /></BookMarkBtn>
                </TodayWrap>

                {isWrite ?
                    <TodayTextArea onChange={textChange} value={text} ></TodayTextArea> :
                    <TodayTextArea readonly disabled value={text}></TodayTextArea>
                }
            </Today>

            {/* readonly  disabled */}
            <More>

            </More>
            {
                isWrite ? <DoneBtn onClick={patchWod}><img src={IconSave} /></DoneBtn> : null
            }



        </Container>
    );
};

export default Content;