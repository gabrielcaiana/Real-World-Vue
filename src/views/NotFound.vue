<template>
  <div class="notFound">
    <h1>Oops!</h1>
		<h3>
			<template v-if="resource">
				{{ resource }}
			</template>	
			The page you're looking for is not here.
		</h3>
		<router-link :to="{name: 'event-list'}">Back to the home page</router-link>
  </div>
</template>

<script>
export default {
	props: {
		resource: {
			type: String,
			required: true
		},
	},
};
</script>

<style scoped>
	.notFound {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
