<template>
	<div>
		<el-row justify="end" :gutter="16">
			<el-col :span="20">
				<TagsView />
				<Breadcrumb v-if="config.SHOW_BREADCRUMB" />
			</el-col>
			<el-col :span="4">
				<UserConfig />
			</el-col>
		</el-row>
	</div>
</template>

<script name="Navbar" setup>
import Breadcrumb from '@/components/Breadcrumb';
import TagsView from '@/components/TagsView';
import { useConfigStore } from '@/stores/config';
import UserConfig from '@/components/UserConfig';

const config = useConfigStore();
</script>

<style lang="scss" scoped>
</style>
