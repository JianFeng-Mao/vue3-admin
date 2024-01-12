<template>
	<div class="tags-view-wrap">
		<el-scrollbar>
			<div class="tag-list">
				<router-link
					v-for="item in tagsStore.visibleTags"
					:key="item.path"
					:to="item.path"
					@contextmenu.prevent="openMenu(item)"
				>
					<div
						:class="['tag-item', {'active-tag-item': isActive(item)}]"
						:ref="tagRefs.set"
						:data-path="item.path"
					>
						<span class="name">
							<span class="circle" />
							{{ item.title }}
						</span>
						<el-icon v-if="!isAffix(item)" @click.prevent.stop="closeTag(item)">
							<Close />
						</el-icon>
					</div>
				</router-link>
				<div class="active-tag-item-box" :style="activeTagBoxStyle" />
			</div>
		</el-scrollbar>
	</div>
</template>

<script name="tags" setup>
import { Close } from '@element-plus/icons-vue';
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import path from 'path';
import { isEmpty } from '@/utils/is';
import { routes } from '@/router';
import { useTagsStore } from '@/stores/tagsView';
import { useTemplateRefsList } from '@vueuse/core';

const affixTags = ref([]);

const $route = useRoute();
const $router = useRouter();

const tagsStore = useTagsStore();

const isActive = (route) => route.path === $route.path;

// 菜单固定在tagsView
const isAffix = (route) => route.meta && route.meta.affix;

function fileterAffixTags(routeList, basePath = '/') {
  let tags = [];
  routeList.forEach((route) => {
    if (isAffix(route)) {
      const tagPath = path.resolve(basePath, route.path);
      tags.push({
        path: tagPath,
        fullPath: tagPath,
        name: route.name,
        meta: { ...route.meta }
      });
    }
    if (!isEmpty(route.children)) {
      const tempTags = fileterAffixTags(route.children, route.path);
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags];
      }
    }
  });
  return tags;
}

function addTag(tag) {
  if (tag.name) {
    tagsStore.addTag(tag);
  }
}

function initTag() {
  affixTags.value = fileterAffixTags(routes);
  affixTags.value.forEach((tag) => {
    addTag(tag);
  });
}

function updateView(tags, tag) {
  if (tag.meta.activeMenu) {
    $router.push(tag.meta.activeMenu);
  } else {
    const lastTag = tags.value.slice(-1)[0];
    if (lastTag) {
      $router.push(lastTag.fullPath);
    } else {
      $router.push('/');
    }
  }
}

function closeTag(tag) {
  const visiableTags = tagsStore.delTag(tag);
  if (isActive(tag)) {
    updateView(visiableTags, tag);
  }
}

function openMenu(tag) {
  // TODO:
}

const tagRefs = useTemplateRefsList();
const activeTagBoxStyle = ref({});

function updateActiveTagBoxStyle() {
  const style = {
    width: 0,
    transform: 'translateX(0)'
  };
  const activeTagIndex = tagRefs.value.findIndex((tag) => isActive({ ...tag, path: tag.dataset.path }));
  const activeTag = activeTagIndex > -1 ? tagRefs.value[activeTagIndex] : null;
  if (activeTag) {
    style.width = `${activeTag.clientWidth}px`;
    style.height = `${activeTag.clientHeight}px`;
    style.transform = `translateX(${activeTag.offsetLeft}px)`;
  }
  activeTagBoxStyle.value = style;
}

onMounted(() => {
  initTag();
  addTag($route);
  nextTick(() => {
    updateActiveTagBoxStyle();
  });
});

watch($route, (route) => {
  addTag(route);
  nextTick(() => {
    updateActiveTagBoxStyle();
  });
});
</script>

<style lang="scss" scoped>
.tags-view-wrap {
  margin-bottom: 8px;
  .tag-list {
    display: flex;
    .tag-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      position: relative;
      font-size: var(--tag-text-font-size);
      color: var(--el-text-color-primary);
      z-index: 1;
      transition: all .3s;
      &:hover {
        color: var(--el-color-primary);
        .circle {
          background-color: var(--el-color-primary);
        }
      }
      &.active-tag-item {
        backdrop-filter: blur(20px);
        color: var(--el-color-primary);
        .circle {
          background-color: var(--el-color-primary);
        }
        &:hover {
          color: var(--el-color-primary-dark-2);
          .circle {
            background-color: var(--el-color-primary-dark-2);
          }
        }
      }
      .circle {
        width: 6px;
        height: 6px;
        display: inline-block;
        background-color: var(--el-color-info);
        border-radius: 50%;
        vertical-align: middle;
        margin-bottom: 2px;
        transition: all .3s;
      }
      .name {
        margin-right: 3px;
        display: inline-block;
      }
      :deep(.el-icon) {
        vertical-align: middle;
        font-size: var(--tag-icon-font-size);
        padding: 1px;
        &:hover {
          border-radius: 50%;
          background-color: var(--el-color-warning-light-3);
          color: var(--el-color-white);
        }
      }
    }
    .active-tag-item-box {
      position: absolute;
      background-color: var(--el-color-white);
      box-shadow: var(--el-box-shadow-lighter);
      transition: all .3s;
      border-radius: 4px;
    }
  }
}
</style>
