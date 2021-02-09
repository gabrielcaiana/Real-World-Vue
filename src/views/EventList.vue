<template>
  <div>
    <h1>Events Listing</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
    <p></p>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
import EventCard from "@/components/EventCard";
export default {
  components: {
    EventCard,
  },

  data: () => ({
    events: [],
  }),

  created() {
   EventService.getEvents()
	 .then(response => {
		 this.events = response.data
	 }).catch(err => {
		 console.log(err)
	 })
  },
};
</script>

<style></style>
