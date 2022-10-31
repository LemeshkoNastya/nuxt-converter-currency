<template>
  <div class="flex flex-col gap-y-[10px]">
    <label
      v-if="label"
      class="font-roboto font-medium text-14 2xl:text-16 leading-[16px] 2xl:leading-[19px] text-text-dark"
    >
      {{ label }}
    </label>
    <input
      v-model="currentValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="h-[46px] xl:h-[50px] px-[20px] bg-white border border-border rounded-[5px] font-roboto text-12 2xl:text-14 leading-[12px] 2xl:leading-[14px] placeholder-text-gray-300 outline-none"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "disabled", "value"],
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    currentValue() {
      this.$emit("update:value", this.currentValue || null);
    },
    value() {
      if (this.currentValue !== this.value) this.currentValue = this.value;
    },
  },
};
</script>

<style>
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
