<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: '1' } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
			<div class="footer-card">
				<BaseIcon name="users" />
      	<span class="card-attending">{{ event.attendees.length }} attending</span>
			</div>
    </div>
  </router-link>
</template>

<script>
export default {
  data: () => ({
    event: {
      id: 1,
      title: "Beach Cleanup",
      date: "Tue May 15 2018",
      time: "6:00",
      attendees: [
        { id: "abc123", name: "Adam Jahr" },
        { id: "def456", name: "Gregg Pollack" },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.footer-card {
	display: flex;
	align-items: center;
	margin-top: 8px;
}

.card-attending {
	margin-left: 8px;
}
</style>
