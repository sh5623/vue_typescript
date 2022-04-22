import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '../..';

export interface Item {
  id: number;
  title: string;
  status: string;
}

@Module({ store, name: 'Todo', namespaced: true, dynamic: true })
class TodoModule extends VuexModule {
  // state
  public todoList: Item[] = [
    { id: 0, title: 'test0', status: 'active' },
    { id: 1, title: 'test1', status: 'active' },
    { id: 2, title: 'test2', status: 'clear' },
  ];

  // getters
  get allTodoList() {
    return this.todoList;
  }

  get activeTodoList() {
    return this.todoList.filter((item: Item) => item.status === 'active');
  }

  get clearTodoList() {
    return this.todoList.filter((item: Item) => item.status === 'clear');
  }

  // mutations
  @Mutation
  public addItem(item: Item) {
    this.todoList.push(item);
  }

  @Mutation
  public changeStatus({ id, status }: { id: number; status: string }) {
    this.todoList[id].status = status;
  }

  @Mutation
  public removeItem(id: number) {
    this.todoList.splice(id, 1);
  }

  // actions
}

export const TodoStore = getModule(TodoModule);
