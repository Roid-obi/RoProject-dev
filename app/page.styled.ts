"use client"
import styled from "styled-components";

export const Padding = styled.div`
    width: 100%;
    padding: 0 150px;
    margin: auto;
    max-width: 1420px;
    @media (width <= 768px) {
        padding: 0 16px;
    }
`

export const HeaderHomeStyle = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    align-items: center;
    padding: 40px 30px;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        padding: 30px 10px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 20px 10px 10px 10px;
    }
`;

export const TextHeader = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    h3 {
        color: white;
        font-size: 30px;
    }
    h1 {
        color: aliceblue;
        font-size: 60px;
        font-weight: 600;
    }
    .nameCall {
        color: #5862e4;
    }
    p {
        /* max-width: 300px; */
        color: aliceblue; 
        font-size: 20px;
    }
    button {
        margin-top: 40px;
    }
    
    @media screen and (max-width: 1000px) {
        text-align: center;
        max-width: 100%;
        padding: 30px 20px 20px 20px;
        h3 {
            color: whitesmoke;
            font-size: 20px;
        }
        h1 {
            color: aliceblue;
            font-size: 40px;
            font-weight: 600;
        }
        .nameCall {
            color: #5862e4;
        }
        p {
            margin: auto;
            color: aliceblue; 
            font-size: 14px;
        }
        button {
            margin: 20px auto;
        }
    }
`;

export const CardHeader = styled.div`
    width: 100%;
    .box {
        background-color: white;
        width: 250px;
        height: 300px;
    }
`;

export const Skills = styled.div`
    display: flex;
`;

export const Card = styled.div`
    width: 200px;
    height: 300px;
    background: white;
    backdrop-filter: blur(20px);
`;