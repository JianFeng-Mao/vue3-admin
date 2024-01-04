<template>
	<i v-if="icon">xxx</i>
	<span v-if="title">{{ title }}</span>
</template>
<script name="MenuTitle" setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  }
});
</script>
