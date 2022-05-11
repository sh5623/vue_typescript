<template>
  <div>
    <h5>Play Response Check</h5>
    <div id="screen" :class="state" @click="clickScreen">{{ message }}</div>
    <div>
      <div v-if="result.length > 0">
        평균시간 :
        {{ resultTime }}ms
      </div>
      <button @click="onReset">reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ResponseCheck extends Vue {
  private state: string = 'waiting';
  private message = '클릭해서 시작하세요.';
  private result: Array<number> = [];

  private startTime = this.$dayjs();
  private endTime = this.$dayjs();
  private timeOut: number = 0;

  private onReset() {
    this.result = [];
  }

  get resultTime() {
    return this.result.reduce((a, b) => a + b, 0) / this.result.length || 0;
  }

  private clickScreen() {
    if (this.state === 'waiting') {
      this.state = 'ready';
      this.message = '초록색이 되면 클릭하세요.';
      this.timeOut = setTimeout(() => {
        this.state = 'now';
        this.message = '지금 클릭!';
        this.startTime = this.$dayjs();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
    } else if (this.state === 'ready') {
      clearTimeout(this.timeOut);
      this.state = 'waiting';
      this.message = '초록색이 된 후에 클릭해주세요!';
    } else if (this.state === 'now') {
      this.endTime = this.$dayjs();
      this.state = 'waiting';
      this.message = '클릭해서 시작하세요.';
      this.result.push(
        this.$dayjs(this.endTime).diff(this.$dayjs(this.startTime))
      );
    }
  }
}
</script>

<style lang="scss" scoped>
#screen {
  width: 30rem;
  height: 20rem;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
