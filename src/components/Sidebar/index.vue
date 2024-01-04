<template>
	<logo :collapse="false" />
	<Menu :menus="routes" :collapse="false" />
</template>

<script name="Sidebar" setup>
import Menu from '@/components/Menu';
import { routes } from '@/router';
import Logo from '@/layout/Logo.vue';

</script>

<style lang="scss" scoped></style>
