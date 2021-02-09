<template>
  <div class="icon-wrapper">
    <svg v-html="svg" class="icon" :width="width" :height="height" />
    <slot></slot>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    }
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: "icon",
        width: this.width,
        height: this.height,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
	.icon-wrapper {
		display: flex;
		align-items: center;
	}

	.icon {
		margin-right: 8px;
	}
</style>
