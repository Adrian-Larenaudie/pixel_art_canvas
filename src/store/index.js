import { createStore } from 'vuex';

import colorSelector from './modules/colorSelector.js';
import pixelArea from './modules/pixelArea.js';
import loadSaveDraw from './modules/loadSaveDraw.js';

export default createStore({
  modules: {
    colorSelector,
    pixelArea,
    loadSaveDraw,
  },
});