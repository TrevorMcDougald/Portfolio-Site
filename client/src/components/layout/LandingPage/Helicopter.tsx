import React, { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";

interface OwnProps {}

type Props = OwnProps;
const HelicopterWrapper = styled.div`
  ${tw`fixed w-2/3 h-full top-0 right-0`};
  animation: bounce 4s ease-in-out 0s infinite normal none;
  -webkit-animation: bounce 4s ease-in-out 0s infinite normal none;
`;

const StyledHelicopter = styled.div`
  ${tw`absolute`};
  top: 50%;
  left: 30%;
  z-index: 105;
  transform: rotate(-15deg) scale(0.9);
`;

// Round Circle of Helicopter
const Cockpit = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 100px;
  background-color: #218bb4;
  position: fixed;
  overflow: hidden;
  z-index: 5;
  &:before {
    content: "";
    width: 170px;
    height: 170px;
    border-radius: 40px;
    background-color: rgba(65, 94, 133, 1);
    position: absolute;
    z-index: 5;
    top: -10px;
    left: -25px;
  }
  &:after {
    content: "";
    width: 170px;
    height: 170px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    z-index: 8;
    top: -60px;
    left: -60px;
  }
`;

// Triangle end of Helicopter
const Tail = styled.div`
  position: absolute;
  border-top: 20px solid transparent;
  border-bottom: 70px solid transparent;
  border-left: 330px solid #218bb4;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 10px;
  top: 40px;
  left: 150px;
  transform-origin: left center;
`;

// Pointy Top Part of Helicopter Body
const HelicopterBody = styled.div`
  border-bottom: 70px solid #218bb4;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  width: 10px;
  position: absolute;
  left: 130px;
  top: -10px;
`;

const SmallRotor = styled.div`
  animation: rotate 0.6s linear 0s infinite normal none;
  background-color: rgba(28, 18, 2, 0.02);
  width: 100px;
  height: 100px;
  position: absolute;
  top: 5px;
  left: 428px;
  border-radius: 100px;
  overflow: hidden;
  div {
    width: 120px;
    height: 10px;
    background-color: rgba(28, 18, 2, 0.03);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -60px;
    margin-top: -5px;
  }
  div:nth-of-type(2) {
    transform: rotate(90deg);
  }
`;

const Rotor = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 350px;
  position: absolute;
  top: -360px;
  left: -200px;
  overflow: hidden;
  background-color: rgba(28, 18, 2, 0.03);
  transform: scale(1, 0.075);
  z-index: 20;
  .rotator {
    width: 700px;
    height: 700px;
    border-radius: 350px;
    position: absolute;
    animation: rotate 0.6s linear 0s infinite normal none;

    div {
      width: 700px;
      height: 50px;
      background-color: rgba(28, 18, 2, 0.03);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -350px;
      margin-top: -30px;
    }
    div:nth-of-type(1) {
      transform: rotate(0deg);
    }
    div:nth-of-type(2) {
      transform: rotate(90deg);
    }
  }
`;
const Helicopter: FunctionComponent<Props> = (props) => {
  return (
    <HelicopterWrapper>
      <StyledHelicopter>
        <Cockpit />
        <Tail />
        <HelicopterBody />
        <Rotor>
          <div className='rotator'>
            <div />
            <div />
          </div>
        </Rotor>
        <SmallRotor>
          <div />
          <div />
        </SmallRotor>
      </StyledHelicopter>
    </HelicopterWrapper>
  );
};

export default Helicopter;
