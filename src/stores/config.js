import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', () => {
  const layout = reactive({
    LAYOUT_MODE: 'default',
    SHOW_BREADCRUMB: false, // 显示面包屑导航
    LOGO_COLLAPSE: false // LOGO是否可收缩
  });
  return { layout };
});
