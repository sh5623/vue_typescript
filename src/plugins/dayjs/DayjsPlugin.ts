import { Vue } from 'vue-property-decorator';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import * as ko from 'dayjs/locale/ko';

dayjs.locale(ko);
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);

const DayjsPlugin = {
  install(vue: typeof Vue) {
    vue.prototype.$dayjs = dayjs;
  },
};

export default DayjsPlugin;
