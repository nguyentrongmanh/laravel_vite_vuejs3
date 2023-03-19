<template>
  <button
    :style="`width: ${setWith}; height: ${setHeight};`"
    class="btn"
    :class="classes"
    :type="`${type}`"
    @click="$emit('click')"
    :disabled="disabled"
  >
    {{ label }}
    <slot name="body"></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    width: {
      type: String,
      default: "180px",
      required: false,
    },
    height: {
      type: String,
      default: "40px",
      required: false,
    },
    label: {
      type: String,
      default: "",
      required: false,
    },
    type: {
      type: String,
      default: "button",
      require: "true",
    },
    classes: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    setWith() {
      if (typeof this.width == "number") {
        return this.width + "px";
      }
      return this.width;
    },
    setHeight() {
      if (typeof this.height == "number") {
        return this.height + "px";
      }
      return this.height;
    },
  },
};
</script>
