<template>
	<div class="__default-layout-wrap full-h">
		<el-container class="full-h">
			<Aside />
			<el-container direction="vertical">
				<Header />
				<el-main>
					<AppMain />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script name="DefaultLayout" setup>
import Aside from '../Aside';
import Header from '../Header';
import AppMain from '../AppMain';

</script>

<style lang="scss" scoped>

</style>
