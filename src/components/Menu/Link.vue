<template>
	<component :is="link" v-bind="linkProps(to)">
		<slot />
	</component>
</template>

<script name="MenuLink" setup>
import { computed } from 'vue';
import { isExternal } from '@/utils/is';

const props = defineProps({
  to: {
    type: String,
    required: true
  }
});

const link = computed(() => {
  if (isExternal(props.to)) {
    return 'a';
  }
  return 'router-link';
});

const linkProps = (to) => {
  if (isExternal(to)) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener'
    };
  }
  return {
    to
  };
};
</script>

<style lang="scss" scoped>

</style>
