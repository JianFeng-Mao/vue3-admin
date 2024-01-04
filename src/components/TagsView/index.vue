<template>
	<div class="tags-view-wrap">
		<el-scrollbar>
			<div class="tag-list">
				<router-link
					v-for="item in items"
					ref="tagRef"
					:key="item.path"
					:to="item.path"
					:path="item.path"
					:class="['tag-item', {'active-tag-item': isActive(item)}]"
				>
					<span class="name">
						<span class="circle" />
						{{ item.label }}
					</span>
					<el-icon><Close /></el-icon>
				</router-link>
				<div class="active-tag-item-box" :style="activeTagBoxStyle" />
			</div>
		</el-scrollbar>
	</div>
</template>

<script name="tags" setup>
import { Close } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const items = [
  {
    label: 'tag1',
    path: '/home'
  },
  {
    label: 'tag2',
    path: '/tabsManage/tabs'
  }
];
const $route = useRoute();
const isActive = (route) => route.path === $route.path;
const tagRef = ref([]);
const activeTagBoxStyle = computed(() => {
  const style = {
    width: 0,
    transform: 'translateX(0)'
  };
  const activeTagIndex = tagRef.value.findIndex((tag) => isActive({ ...tag, path: tag.$attrs.path }));
  const activeTag = activeTagIndex > -1 ? tagRef.value[activeTagIndex] : null;
  if (activeTag) {
    style.width = `${activeTag.$el.clientWidth}px`;
    style.height = `${activeTag.$el.clientHeight}px`;
    style.transform = `translateX(${activeTag.$el.offsetLeft}px)`;
  }
  return style;
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
      padding: 8px 16px;
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
