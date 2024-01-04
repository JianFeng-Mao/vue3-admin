<template>
	<div class="user-config-wrap">
		<div class="icon-item">
			<el-icon><RefreshLeft /></el-icon>
		</div>
		<div class="icon-item">
			<el-icon><SwitchButton /></el-icon>
		</div>
		<div class="icon-item">
			<el-icon><FullScreen /></el-icon>
		</div>
		<div class="icon-item">
			<el-icon><MagicStick /></el-icon>
		</div>
		<div class="icon-item avatar-wrap">
			<el-avatar :icon="UserFilled" size="small" />昵称
		</div>
	</div>
</template>

<script setup>
import { RefreshLeft, SwitchButton, FullScreen, MagicStick, UserFilled } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
.user-config-wrap {
  display: flex;
  // justify-content: space-around;
  align-items: center;
  height: 40px;
  line-height: 44px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-lighter);
  .icon-item {
    width: 15%;
    height: 100%;
    cursor: pointer;
    &:hover {
      background-color: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }
    &.avatar-wrap {
      width: 40%;
      text-align: left;
      display: flex;
      align-items: center;
    }
  }
}
</style>
