import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  goalSelector,
  hourSelector,
  minuteSelector,
  roundSelector,
} from "../atoms";

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

const Hour = styled(motion.button)`
  border: none; /* 테두리 제거 */
  outline: none; /* 클릭했을 때 생기는 외곽선 제거 */
  box-shadow: none; /* 그림자 효과 제거 */
  -webkit-appearance: none; /* Safari/Chrome의 기본 스타일 제거 */
  -moz-appearance: none; /* Firefox의 기본 스타일 제거 */

  width: 200px;
  height: 300px;

  /* background-color: #f3f3f3; */
  border-radius: 25px;
  border-color: tomato;

  // 수평정렬
  display: flex;
  justify-content: center;
  align-items: center;

  color: tomato;
  font-size: 120px;
  font-weight: 800;
  text-align: center;
`;

const Division = styled.div`
  text-align: center;

  span {
    font-size: 120px;
  }
`;

const Minute = styled(motion.button)`
  border: none; /* 테두리 제거 */
  outline: none; /* 클릭했을 때 생기는 외곽선 제거 */
  box-shadow: none; /* 그림자 효과 제거 */
  -webkit-appearance: none; /* Safari/Chrome의 기본 스타일 제거 */
  -moz-appearance: none; /* Firefox의 기본 스타일 제거 */

  width: 200px;
  height: 300px;

  background-color: #f3f3f3;
  border-radius: 25px;

  // 수평정렬
  display: flex;
  justify-content: center;
  align-items: center;

  color: tomato;
  font-size: 120px;
  font-weight: 800;
  text-align: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
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

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;

  span {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5%;
    margin-bottom: 5%;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const btnVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  doing: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1,
  },
};

// main
function Pomodoro() {
  const [playFlag, setPlayFlag] = useState(false);
  const [hour, setHour] = useRecoilState(hourSelector);
  const [minute, setMinute] = useRecoilState(minuteSelector);
  const [roundInfo, setRoundInfo] = useRecoilState(roundSelector);
  const [goalInfo, setGoalInfo] = useRecoilState(goalSelector);

  // 버튼을 클릭하면 play 아이콘이 바뀌어야 한다.
  // 그리고 1초 뒤에 59초가 되어야 한다.
  const onChangePlayIcon = () => setPlayFlag((flag) => !flag);

  // 시, 분이 00:00 이면 roundPoint + 1가 기본적으로 계산된다.
  // round가 4/4라면, 0/4로 되돌리고, goalPoint + 1를 계산한다.
  const plusRoundAndGoal = () => {
    if (!(hour === 0 && minute === 0)) return;
    const { current, target } = roundInfo;

    // 이 함수를 실행한 것 자체가 +1를 하기 위함.
    setRoundInfo({ current: current + 1, target });
    setHour(25);
    setMinute(0);

    // 만약 round를 모두 채웠다면
    if (current / target === 1) {
      // 리셋시키고
      setRoundInfo({ current: 0, target });
      // goalPoint를 추가한다.
      setGoalInfo({ current: goalInfo.current + 1, target: goalInfo.target });
    }
  };

  // 타이머 기능: 분, 시 계산
  useEffect(() => {
    // playFlag값이 true일때만 수행해야 한다.
    if (playFlag) {
      const timer = setTimeout(() => {
        // 분
        minute !== 0 ? setMinute(minute - 1) : setMinute(59);
        // 시
        hour !== 0 && minute === 0 && setHour(hour - 1);
      }, 1000);

      plusRoundAndGoal();

      // 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [playFlag, hour, minute, setHour, setMinute]);

  return (
    <>
      <Title>Pomodoro</Title>
      <Wrapper>
        <Hour
          key={hour}
          variants={btnVars}
          initial="start"
          animate="doing"
          exit="exit"
        >
          {hour < 10 ? "0" + hour : hour}
        </Hour>
        <Division>
          <span>:</span>
        </Division>
        <Minute
          key={minute}
          variants={btnVars}
          initial="start"
          animate="doing"
          exit="exit"
        >
          {minute === 0 ? "0" + minute : minute}
        </Minute>
      </Wrapper>

      <BtnWrapper>
        <Btn
          onClick={onChangePlayIcon}
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
        >
          {!playFlag ? (
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

      <BottomWrapper>
        <BottomItem>
          <span>
            {roundInfo.current} / {roundInfo.target} <br />
          </span>
          <span>ROUND</span>
        </BottomItem>
        <BottomItem>
          <span>
            {goalInfo.current} / {goalInfo.target}
          </span>
          <span>GOAL</span>
        </BottomItem>
      </BottomWrapper>
    </>
  );
}

export default Pomodoro;
