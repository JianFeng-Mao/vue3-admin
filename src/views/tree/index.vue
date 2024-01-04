<template>
	<div class="custom-tree-container">
		<p>Using render-content</p>
		<el-tree
			:data="dataSource"
			show-checkbox
			node-key="id"
			default-expand-all
			:expand-on-click-node="false"
			:render-content="renderContent"
		/>
		<p>Using scoped slot</p>
		<el-tree
			:data="dataSource"
			show-checkbox
			node-key="id"
			default-expand-all
			:expand-on-click-node="false"
		>
			<template #default="{ node, data }">
				<span class="custom-tree-node">
					<span>{{ node.label }}</span>
					<span>
						<a @click="append(data)"> Append </a>
						<a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
					</span>
				</span>
			</template>
		</el-tree>
	</div>
</template>

<script setup>
import { ref } from 'vue';

let id = 1000;

const dataSource = ref([]);

const append = (data) => {
  const newChild = { id: id++, label: 'testtest', children: [] };
  if (!data.children) {
    data.children = [];
  }
  data.children.push(newChild);
  dataSource.value = [...dataSource.value];
};

const remove = (node, data) => {
  const parent = node.parent;
  const children = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  dataSource.value = [...dataSource.value];
};

const renderContent = (h, { node, data }) => h(
  'span',
  {
    class: 'custom-tree-node'
  },
  h('span', null, node.label),
  h(
    'span',
    null,
    h(
      'a',
      {
        onClick: () => append(data)
      },
      'Append '
    ),
    h(
      'a',
      {
        style: 'margin-left: 8px',
        onClick: () => remove(node, data)
      },
      'Delete'
    )
  )
);

</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
