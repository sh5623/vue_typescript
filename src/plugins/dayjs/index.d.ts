import Vue from 'vue';
import { Dayjs } from 'dayjs';

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: (val?: string | Date | number | Dayjs, format?: string) => Dayjs;
  }
}
