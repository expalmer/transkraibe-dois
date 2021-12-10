import { writable } from 'svelte/store';
import { createStorage } from '../utils/storage';

const storage = createStorage('snapshots');

const initialState = (() =>
  storage.get() || {
    items: [],
    currentId: 0,
  })();

export const snapshots = writable(initialState);

const updating = (cb) => {
  snapshots.update((state) => {
    const nextState = cb(state);
    storage.set(nextState);
    return nextState;
  });
};

export const store = (params) => {
  updating((state) => ({ ...state, items: [{ id: Date.now(), ...params }, ...state.items] }));
};

export const destroy = (id) => {
  updating((state) => ({ ...state, items: state.items.filter((i) => i.id !== id) }));
};

export const selectCurrentId = (id) => {
  updating((state) => ({ ...state, currentId: id }));
};
