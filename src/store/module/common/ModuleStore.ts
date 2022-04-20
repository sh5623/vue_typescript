import Vue from 'vue';
import Vuex, { ActionContext, StoreOptions } from 'vuex';
import moduleA from './ModuleA.Store';
import moduleB from './ModuleB.Store';

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const moduleStore: StoreOptions<RootState> = {
  modules: {
    moduleA,
    moduleB,
  },
  state: {
    data: 'root',
  },
  mutations: {
    setData(state: RootState, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({ commit }: ActionContext<RootState, RootState>, data: string) {
      commit('setData', data);
    },
  },
};

export default new Vuex.Store(moduleStore);
