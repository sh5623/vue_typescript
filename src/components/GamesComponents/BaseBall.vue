<template>
  <div>
    <h5>Play BaseBall</h5>
    <span>{{ result }}</span>
    <form @submit.prevent="onSubmitForm" class="inputForm">
      <input v-model="value" maxlength="4" ref="inputRef" />
      <button type="submit" class="inputButton">입력</button>
    </form>
    <br />
    <div>시도 : {{ tries.length }}</div>
    <ul class="tryItem">
      <li v-for="(tryItem, index) in tries" v-bind:key="index">
        <div>
          {{ tryItem.try }}
        </div>
        <div>
          {{ tryItem.result }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private result = '';
  private value = '';
  private tries: Array<Record<string, string>> = [];
  private answer = this.getNumbers();

  @Ref() private readonly inputRef!: HTMLInputElement;

  private getNumbers() {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberArray = [];
    for (let i = 0; i < 4; i++) {
      const choosen = candidates.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      numberArray.push(choosen);
    }

    return numberArray;
  }

  private onSubmitForm() {
    if (this.value === this.answer.join('')) {
      this.tries.push({
        try: this.value,
        result: '홈런',
      });
      this.result = '홈런';
      alert('축하합니다! 게임을 다시 시작합니다.');
      this.tries = [];
      this.answer = this.getNumbers();
    } else {
      if (this.tries.length >= 9) {
        this.result = `패배하였습니다! 정답은 ${this.answer} 이였습니다.`;
        this.tries = [];
        this.answer = this.getNumbers();
        this.value = '';
        this.inputRef.focus();

        return;
      }

      let strike = 0;
      let ball = 0;

      const inputArray = this.value.split('').map((value) => parseInt(value));
      this.answer.map((number: number, index: number) => {
        if (number === inputArray[index]) strike++;
        else if (inputArray.includes(number)) ball++;
      });
      this.tries.push({
        try: this.value,
        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
      });
    }
    this.value = '';
    this.inputRef.focus();
  }
}
</script>

<style lang="scss" scoped>
.tryItem {
  text-align: left;
}

.inputButton {
  margin-left: 5px;
}

.inputForm {
  margin-top: 10px;
}
</style>
