export enum RockScissorsPaperScoreEnum {
  'scissors' = 1,
  'rock' = 0,
  'paper' = -1,
}

export const RockScissorsPaperScoreValue = (result: string) =>
  Object.entries(RockScissorsPaperScoreEnum).find(
    ([key]) => key === result
  )?.[1] as number;
