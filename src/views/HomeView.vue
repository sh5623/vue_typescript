<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="60" /> Hello Kyla :)
    <hr />
    <Message />
    <Children :parentMessage="message" :parentMessage2="message2" />
    <button @click="changeMessage">메세지를 바꿔주세요.</button>
    <EmitParent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/Message.vue'; // @ is an alias to /src
import Children from '@/components/Children.vue';
import EmitParent from '@/components/EmitParent.vue';

@Component({
  components: {
    Message,
    Children,
    EmitParent,
  },
})
export default class HomeView extends Vue {
  message: string = "Hi, I'm Kyla.";
  message2: string = "Let's Study Vue.js + TypeScript!";

  changeMessage() {
    this.message2 = 'Studying...';
  }
}
</script>

<style>
img {
  align-items: left;
}
</style>
