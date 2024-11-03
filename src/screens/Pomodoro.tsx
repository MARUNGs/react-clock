import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { hour, minute } from "../atoms";

// styled + motion
const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 80px;
  margin: 10% 0;
`;

const Wrapper = styled.div`
  // 수평정렬
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;

const Hour = styled.div`
  width: 200px;
  height: 300px;

  background-color: #f3f3f3;
  border-radius: 25px;

  // 수평정렬
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: tomato;
    font-size: 120px;
    font-weight: 800;
    text-align: center;
  }
`;

const Division = styled.div`
  text-align: center;

  span {
    font-size: 120px;
  }
`;

const Minute = styled.div`
  width: 200px;
  height: 300px;

  background-color: #f3f3f3;
  border-radius: 25px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 5% auto;
`;

const Btn = styled(motion.button)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const SvgButton = styled.svg`
  width: 50px;
  height: 50px;
`;

// animation -----
const boxVars = {
  hover: {
    scale: 1,
  },
  click: {
    scale: 0.8,
  },
};

// main
function Pomodoro() {
  const [playFlag, setPlayFlag] = useState(true);
  const [hours, setHours] = useRecoilState(hour);
  const [minutes, setMinutes] = useRecoilState(minute);

  // function
  const onChangePlayIcon = () => setPlayFlag((flag) => !flag);

  return (
    <>
      <Title>Pomodoro</Title>
      <Wrapper>
        <Hour>
          <span>{hours}</span>
        </Hour>
        <Division>
          <span>:</span>
        </Division>
        <Minute />
      </Wrapper>

      <BtnWrapper>
        <Btn
          onClick={onChangePlayIcon}
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
        >
          {playFlag ? (
            <SvgButton
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></motion.path>
            </SvgButton>
          ) : (
            <SvgButton
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></motion.path>
            </SvgButton>
          )}
        </Btn>
      </BtnWrapper>
    </>
  );
}

export default Pomodoro;
