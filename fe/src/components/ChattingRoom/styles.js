import styled from 'styled-components';
import ForwardIcon from '@mui/icons-material/Forward';

export const ChatBox = styled.div`
    flex: 1 1 0%;
    input{
        height: 90px;
        width:99%
    }
`;

export const Header = styled.div`
    height: 24px;
    display: flex;    
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 1px 0 var(--saf-0);
    padding: 20px 16px 20px 20px;
    font-weight: bold;
    -webkit-box-align: center;
    align-items: center;
`;

export const MessageBox = styled.div`
    border: 1px solid #000;
    position: relative;
    height: 90px;
    background: rgb(248,248,248);    
    width: 93%;
    margin: 0 auto;
    margin-bottom: 30px;
    input{
        height: 45px;
        width: 100%;
        border: 0;
        padding: 0;
    }
    button{ 
        width: 70px;
        height: 46px;
        position: absolute;
        right: 0;
        background: #3f0e40;
    }
`;

export const ChatIcon = styled(ForwardIcon)`
    color:white
`