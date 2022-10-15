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

export const Wrapper = styled.div`
    width: 65px;
    display: inline-flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(63, 14, 64);
    border-top: 1px solid rgb(82, 38, 83);
    border-right: 1px solid rgb(82, 38, 83);
    vertical-align: top;
    text-align: center;
    padding: 15px 0px 0px;
    height: 931px;
`;

export const WorkBtn = styled.a`
    button{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: white;
    border: 3px solid rgb(63, 14, 64);
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
    color: black;
    cursor: pointer;
}
`

