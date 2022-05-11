<template>
  <div>
    <h5>Rock Paper Scissors</h5>
    <div id="computer" :style="styleObject"></div>
    <div>
      <button @click="clickButton('rock')">바위</button>
      <button @click="clickButton('scissors')">가위</button>
      <button @click="clickButton('paper')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  RockScissorsPaperCoordsEnum,
  RockScissorsPaperCoordsText,
} from '@/types/enum/games/RockScissorsPaperCoordsEnum';
import { RockScissorsPaperScoreValue } from '@/types/enum/games/RockScissorsPaperScoreEnum';

@Component
export default class RockPaperScissors extends Vue {
  private result = '';
  private score = 0;
  private imageCoord: RockScissorsPaperCoordsEnum =
    RockScissorsPaperCoordsEnum['rock'];
  private interval = 0;

  get styleObject() {
    return {
      background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCoord} 0`,
    };
  }

  mounted() {
    this.changeHand();
  }

  destroyed() {
    clearInterval(this.interval);
  }

  private clickButton(value: string) {
    clearInterval(this.interval);
    const myScore = RockScissorsPaperScoreValue(value);
    let computerScore = 0;
    const computerChoiceValue = RockScissorsPaperCoordsText(this.imageCoord);
    if (computerChoiceValue) {
      computerScore = RockScissorsPaperScoreValue(computerChoiceValue);
    }
    const diff = myScore - computerScore;

    if (diff === 0) {
      this.result = '비겼습니다.';
    } else if ([-1, 2].includes(diff)) {
      this.result = '이겼습니다.';
      this.score += 1;
    } else {
      this.result = '졌습니다.';
      this.score -= 1;
    }
    setTimeout(() => {
      this.changeHand();
    }, 1000);
  }

  private changeHand() {
    this.interval = setInterval(() => {
      if (this.imageCoord === RockScissorsPaperCoordsEnum['rock'])
        this.imageCoord = RockScissorsPaperCoordsEnum['scissors'];
      else if (this.imageCoord === RockScissorsPaperCoordsEnum['scissors'])
        this.imageCoord = RockScissorsPaperCoordsEnum['paper'];
      else if (this.imageCoord === RockScissorsPaperCoordsEnum['paper'])
        this.imageCoord = RockScissorsPaperCoordsEnum['rock'];
    }, 100);
  }
}
</script>

<style lang="scss" scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
