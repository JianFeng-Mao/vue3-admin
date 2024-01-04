<template>
	<el-menu
		:collapse="collapse"
		:mode="mode"
		:collapse-transition="false"
	>
		<MenuItem
			v-for="menu in menus"
			:key="menu.path"
			:item="menu"
			:basePath="menu.path"
		/>
	</el-menu>
</template>

<script name="Menu" setup>
import MenuItem from './Item.vue';

defineProps({
  menus: {
    type: Object,
    required: true
  },
  mode: {
    type: String,
    default: 'vertical'
  },
  collapse: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>

</style>
