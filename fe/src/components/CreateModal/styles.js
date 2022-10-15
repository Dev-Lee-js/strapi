import styled from 'styled-components';
import Button from '@mui/material/Button';

export const WorkPlus = styled.button`
    color: white;
    font-size: 24px;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
`

export const Close = styled.div`
  cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
`



export const Btn = styled(Button)`
    background-color:rgba(74, 21, 75, 0.9);
    &:hover {
        background-color:rgb(63, 38, 64, 0.9 );
    }
`;