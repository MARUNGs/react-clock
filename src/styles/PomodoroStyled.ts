import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 80px;
  margin: 10% 0;
`;

export const Wrapper = styled.div`
  // 수평정렬
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;

export const Hour = styled(motion.button)`
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

export const Division = styled.div`
  text-align: center;

  span {
    font-size: 120px;
  }
`;

export const Minute = styled(motion.button)`
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Btn = styled(motion.button)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const SvgButton = styled.svg`
  width: 50px;
  height: 50px;
`;

export const BottomWrapper = styled.div`
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

export const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
