import styled from 'styled-components';

export const CapaContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block; 
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right, #000000 0%,    
      transparent 100% 
    );
    pointer-events: none; 
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 80%;
  color: white;
  text-align: left;
  padding: 20px;
  z-index: 1;
  
  h1 {
    margin: 0;
    padding: 0;
    line-height: 2;
    font-size: 8rem;
    color: transparent; 
    -webkit-text-stroke: 2px ${({ theme }) => theme.magenta};
    text-stroke: 2px ${({ theme }) => theme.magenta};
  }
  h2 {
    font-size: 8rem;
    color: #ACC1CC;
    font-weight: 500;
  }
  p {
    margin-top: 20px;
    font-size: 2rem;
    color: #ACC1CC

  }
`;