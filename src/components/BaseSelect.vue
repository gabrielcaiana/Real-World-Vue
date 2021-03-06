<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select :value="value" @change="updateValue" v-bind="$attrs">
      <option
        v-for="option in options"
        :key="option"
        :selected="option == value"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },

    label: {
      type: String,
    },
    
    value: {
      required: true
    }
  },

  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
