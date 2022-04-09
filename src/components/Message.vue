<template>
  <div>
    <h4>Message Component</h4>
    <input
      type="text"
      v-model="message"
      @focus="focusMessage"
      @blur="blurMessage"
    />
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Message extends Vue {
  message: string = '메세지를 입력해 주세요...';

  focusMessage() {
    this.message = '';
  }

  blurMessage() {
    this.message = '메세지를 입력해 주세요...';
  }
}
</script>
