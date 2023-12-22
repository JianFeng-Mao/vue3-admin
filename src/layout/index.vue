<template>
	<component :is="`${layout.LAYOUT_MODE}`" />
</template>

<script name="Layout" setup>
import { useConfigStore } from '@/stores/config';
import Default from './containers/default';
import Classic from './containers/classic';

defineOptions({
  components: { Default, Classic }
});

const { layout } = useConfigStore();
</script>

<style lang="scss" scoped>

</style>
