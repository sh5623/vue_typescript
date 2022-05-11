export enum RockScissorsPaperCoordsEnum {
  'rock' = '0',
  'scissors' = '-142px',
  'paper' = '-284px',
}

export const RockScissorsPaperCoordsText = (imageCoord: string) =>
  Object.entries(RockScissorsPaperCoordsEnum).find(
    ([, value]) => value === imageCoord
  )?.[0] as string;
