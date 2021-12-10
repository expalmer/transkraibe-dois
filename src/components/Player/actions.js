import { writable } from "svelte/store";

export const pauseState = writable({
  shouldPause: false,
  shouldRestart: false,
});
