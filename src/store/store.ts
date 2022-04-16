import Vue from 'vue';
import Vuex, { ActionContext, StoreOptions } from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    },
  },
  actions: {
    increase({ state, commit }: ActionContext<State, State>) {
      commit('setCount', state.count + 1);
    },
    decrease({ state, commit }: ActionContext<State, State>) {
      if (state.count <= 0) {
        alert('0 이하로는 감소가 불가능 합니다!');
        commit('setCount', 0);
      } else {
        commit('setCount', state.count - 1);
      }
    },
  },
  getters: {
    count: (state: State) => state.count,
  },
};

export default new Vuex.Store(store);
