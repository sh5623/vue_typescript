import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import BasicStore from './module/common/BasicStore';
import ModuleStore from './module/common/ModuleStore';

const store = new Vuex.Store({
  modules: {
    BasicStore: BasicStore,
    ModuleStore: ModuleStore,
  },
});

export default store;
