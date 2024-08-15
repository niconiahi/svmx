import { mount } from 'svelte';
import App from './App.svelte'
const target = document.querySelector("#app") as Element
mount(App, { target });
