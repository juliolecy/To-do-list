import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    `

export const Button = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    color: #fff;
    transition: ease-out .3s;
    font-size: 1.2rem;
    outline: none;
    border: 3px solid #ffffff;
    position: relative;
    z-index: 1;
    background: transparent;

    &:hover{
        cursor: pointer;
    color: black;
    }

    &:before{
        color: black;
    transition: .5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #ffffff;
    }

    &:hover:before{
        transition: all ease .5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
    }
`
