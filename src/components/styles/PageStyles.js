import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    from {
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

export const PageStyle = styled.div`
  animation: ${FadeIn} 0.5s linear;
`;
