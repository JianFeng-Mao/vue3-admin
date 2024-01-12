import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTagsStore = defineStore('tagsView', () => {
  const visibleTags = ref([]);

  function addTag(tag) {
    if (visibleTags.value.some((t) => t.name === tag.name)) return;
    visibleTags.value.push({ ...tag, title: tag.meta.title });
  }

  function delTag(tag) {
    for (const [index, item] of visibleTags.value.entries()) {
      if (tag.path === item.path) {
        visibleTags.value.splice(index, 1);
        break;
      }
    }
    return visibleTags;
  }

  return { visibleTags, addTag, delTag };
});
