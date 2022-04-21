<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
    />
    <Item
      v-for="item in items"
      v-bind:key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Item from '@/components/TodoComponents/Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {
  private data: any[] = [
    { id: 0, title: 'test0', status: 'active' },
    { id: 1, title: 'test1', status: 'active' },
    { id: 2, title: 'test2', status: 'clear' },
  ];

  public items: any[] = this.data;

  @Watch('$route.params.status')
  private routeUpdate(newValue: string) {
    if (!newValue) {
      this.items = this.data;
    } else if (newValue === 'active' || newValue === 'clear') {
      this.items = this.data.slice().filter((item: any) => {
        return item.status === newValue;
      });
    }
  }
}
</script>

<style lang="scss" scoped></style>
