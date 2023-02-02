import { createStore } from 'vuex';

import colorSelector from './modules/colorSelector.js';
import pixelArea from './modules/pixelArea.js';

export default createStore({
  modules: {
    colorSelector,
    pixelArea
  },
});