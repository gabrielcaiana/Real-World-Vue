<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <event-card v-for="event in event.events" :key="event.id" :event="event" />
		<template v-if=" page != 1">
			<router-link class="pagination" :to="{name: 'event-list', query: {page: page - 1}}" rel="prev">
				Prev Page
			</router-link>
		</template>
		<template  v-if="event.eventsTotal > (this.page * this.perPage )">
			<router-link class="pagination" :to="{name: 'event-list', query: {page: page + 1}}" rel="prev">
				Next Page
			</router-link>
		</template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";
import { mapState } from 'vuex'
export default {
  components: {
    EventCard,
  },
  created() {
		this.$store.dispatch('event/fetchEvents', {
			perPage: this.perPage,
			page: this.page
		})

		this.$store.dispatch('event/totalPages')
  },

	computed: {
		page() {
			return parseInt(this.$route.query.page) || 1
		},

		perPage() {
			let perPage = 3
			return perPage
		},
		
		...mapState([
			'event',
			'user'
		])
	}
};
</script>

<style scoped>
	.pagination {
		margin: 0 4px;
	}
</style>
