<template>
	<div v-if="!item.meta.hidden">
		<template v-if="isOnlyOneChildShowing(item, item.children) && !item.meta.alwaysShow && onlyOneChild.meta">
			<MenuLink :to="resolvePath(onlyOneChild.path)">
				<el-menu-item :index="resolvePath(onlyOneChild.path)">
					<MenuTitle
						:icon="onlyOneChild.meta.icon ||
							(item.meta && item.meta.icon)"
						:title="onlyOneChild.meta.title"
					/>
				</el-menu-item>
			</MenuLink>
		</template>

		<template v-else>
			<el-sub-menu :index="resolvePath(item.path)">
				<template #title>
					<MenuTitle
						v-if="item.meta"
						:icon="item.meta.icon"
						:title="item.meta.title"
					/>
				</template>
				<MenuItem
					v-for="menu in item.children"
					:key="menu.path"
					:item="menu"
					:basePath="resolvePath(menu.path)"
				/>
			</el-sub-menu>
		</template>
	</div>
</template>

<script name="MenuItem" setup>
import { ref } from 'vue';
import path from 'path';
import MenuLink from './Link';
import { isExternal } from '@/utils/is';
import MenuTitle from './Title';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    required: true
  }
});
const onlyOneChild = ref({});
const isOnlyOneChildShowing = (parent, children = []) => {
  const showingItem = children.filter((item) => !item.meta.hidden);
  if (showingItem.length === 1) {
    onlyOneChild.value = showingItem[0];
    return true;
  } if (showingItem.length === 0) {
    onlyOneChild.value = { ...parent, path: '' /* 必须，否则resolvePath会出错 */ };
    return true;
  }
  return false;
};

const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath;
  }

  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style lang="scss" scoped>

</style>
