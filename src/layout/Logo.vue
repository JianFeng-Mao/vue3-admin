<template>
	<div class="__layout-logo sidebar-logo-container" :class="{ collapse }">
		<router-link
			key="collapse"
			class="sidebar-logo-link logo-collapse"
			to="/"
		>
			<img
				:key="logo"
				:src="logo"
				:class="['sidebar-logo', { 'hsf': collapse} ]"
			>
			<transition name="fade" mode="out-in">
				<span v-if="!collapse" class="logo-text">vue3-admin</span>
			</transition>
		</router-link>
	</div>
</template>

<script setup>

defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
});

const logo = require('@/assets/logo.png');

</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: calc(var(--el-logo-height) + 8px);
  line-height: var(--el-logo-height);
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4px 0;
  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    .sidebar-logo {
      margin: 0 8px;
      width: 35px;
      height: var(--el-logo-height);
    }
    .logo-text {
      color: var(--el-color-primary);
      font-weight: bold;
    }
  }
}
</style>
