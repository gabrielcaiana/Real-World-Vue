<template>
	<div class="notification-bar" :class="notificationTypeClass">
		<p>{{ notification.message }}</p>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		props: {
			notification: {
				type: Object,
				required: true
			}
		},

		data:() => ({
			timeout: null
		}),

		mounted() {
			this.timeout = setTimeout(() => {
				this.remove(this.notification)
			}, 5000)
		},

		beforeDestroy() {
			clearTimeout(this.timeout)
		},

		methods: {
			...mapActions('notification', ['remove'])
		},

		computed: {
			notificationTypeClass() {
				return `-text-${this.notification.type}`
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>