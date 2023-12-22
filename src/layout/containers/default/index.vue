<template>
	<el-container>
		<Aside />
		<el-container direction="vertical">
			<Header />
			<AppMain />
		</el-container>
	</el-container>
</template>

<script name="DefaultLayout" setup>
import Aside from '@/layout/Aside';
import Header from '@/layout/Header';
import AppMain from '@/layout/AppMain';
</script>

<style lang="scss" scoped>

</style>
