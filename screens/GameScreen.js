import React from "react";

import BoxContainer from "../app/components/BoxContainer";
import QuestionContainer from "../app/components/QuestionContainer";
import ScoreContainer from "../app/components/ScoreContainer";
import Screen from "../app/components/Screen";
import TimerContainer from "../app/components/TimerContainer";

export default function GameScreen({
  questionContainer: GameScreen,
  timer,
  responses,
}) {
  return (
    <Screen>
      <QuestionContainer question={GameScreen.question} />
      <BoxContainer answer={GameScreen.answer} />
      <TimerContainer time={timer} />
      <ScoreContainer responses={responses} />
    </Screen>
  );
}
