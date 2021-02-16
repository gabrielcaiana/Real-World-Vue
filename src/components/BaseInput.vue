<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" id="label" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
	inheritAttrs: false,
  props: {
    label: {
      type: String,
    },

    value: {
      type: [String, Number],
    },
  },

  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
