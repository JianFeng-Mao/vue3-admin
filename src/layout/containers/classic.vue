<template>
	<el-container>
		<template v-if="config.layout.LOGO_COLLAPSE">
			<Header />
			<el-container>
				<Aside />
				<el-main>
					<AppMain />
				</el-main>
			</el-container>
		</template>

		<template v-else>
			<Aside />
			<el-container>
				<Header />
				<el-main>
					<AppMain />
				</el-main>
			</el-container>
		</template>
	</el-container>
</template>

<script name="ClassicLayout" setup>
import { useConfigStore } from '@/stores/config';
import Aside from '../Aside';
import Header from '../Header';
import AppMain from '../AppMain';

const config = useConfigStore();

</script>

<style lang="scss" scoped>

</style>
