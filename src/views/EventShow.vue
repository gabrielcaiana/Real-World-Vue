<template>
  <div>
    <h1>Showing event {{ event.title }}</h1>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  props: ["id"],

	data:() => ({
		event: {}
	}),

	created() {
		EventService.getEvent(this.id)
		.then(response => {
			this.event = response.data
			console.log(response.data)
		}).catch(err => console.log(err))
	}
};

</script>

<style></style>
