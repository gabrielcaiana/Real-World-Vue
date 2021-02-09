<template>
  <div>
    <h1>Events Listing</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
import EventCard from "@/components/EventCard";
export default {
  components: {
    EventCard,
  },

  data: () => ({
    events: [],
  }),

  created() {
    axios
      .get("http://localhost:3000/events")
      .then((response) => {
        this.events = response.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
</script>

<style></style>
