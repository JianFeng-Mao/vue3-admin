<template>
	<el-breadcrumb class="breadcrumb-wrap" separator="/">
		<el-breadcrumb-item :to="{ path: '/' }">
			homepage
		</el-breadcrumb-item>
		<el-breadcrumb-item>
			<a href="/">promotion management</a>
		</el-breadcrumb-item>
		<el-breadcrumb-item>promotion list</el-breadcrumb-item>
		<el-breadcrumb-item>promotion detail</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script name="BreadCrumb" setup>

</script>

<style lang="scss" scoped>
.breadcrumb-wrap {
  line-height: 2;
}
</style>
