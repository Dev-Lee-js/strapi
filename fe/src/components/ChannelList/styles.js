import styled from 'styled-components';



export const Wrapper = styled.div`
    width: 260px;
    display: inline-flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(63, 14, 64);
    border-top: 1px solid rgb(82, 38, 83);
    border-right: 1px solid rgb(82, 38, 83);
    vertical-align: top;
    text-align: center;    
    height: 931px;
`;

export const Channels = styled.h2`
    height: 36px;
    line-height: 36px;
    margin-left: 85px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    color: #bcabbc;
    width: 100%;
    text-align: left;
`;

export const ChannelName = styled.a`    
    width: 100%;
    color: white;
    text-align: left;
    margin-left: 85px;
`;

export const WorkspaceName = styled.button`
    height: 64px;
    line-height: 64px;
    border-right: none;
    border-left: none;
    border-image: initial;
    width: 100%;
    text-align: left;
    border-top: 1px solid rgb(82, 38, 83);
    border-bottom: 1px solid rgb(82, 38, 83);
    font-weight: 900;
    font-size: 24px;
    background: transparent;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0px 0px 0px 16px;
    margin: 0px;
    color: white;
    cursor: pointer;
`;



