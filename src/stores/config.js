import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', () => {
  const layout = reactive({
    LAYOUT_MODE: 'Default', // 布局
    LOGO_COLLAPSE: false // logo是否可收缩
  });

  return { layout };
});
