import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCog,
  faSearch
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
