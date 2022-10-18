import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../assets/images/icon_plus.png'

const PlusBtn = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
    width: 56px ;
    height: 56px;
    border: none;
    border-radius: 10px;
    background-color: var(--light-gray-color);
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Plus = () => {
    return (
        <PlusBtn>
            <img src={PlusIcon} />
        </PlusBtn>
    );
};

export default Plus;