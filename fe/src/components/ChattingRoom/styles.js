import styled from 'styled-components';


export const ChattingBox = styled.div`
  float:right

`
export const ChattingHeader = styled.div`
    height: 24px;
    display: flex;
    width: 100%;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 1px 0 var(--saf-0);
    padding: 13px 0px 20px 0px;
    font-weight: bold;
    -webkit-box-align: center;
    align-items: center;
    float:right
`
export const ChattingWrapper = styled.div`
    width: 1020px;
    height: 945px;    
    position: absolute;
    left: 328px;
    top: 48px;
`

export const ChattingMessage = styled.div`
    width: 1020px;
    height: 118px;
    position: absolute;    
    bottom: 0;  
`

export const ChattingForm = styled.form`
    color: rgb(29, 28, 29);
    font-size: 15px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(29, 28, 29);
    height: 100%;
`