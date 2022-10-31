<template>
  <div class="flex flex-col gap-y-[12px] md:gap-y-[28px] 2xl:gap-y-[24px]">
    <BaseInput
      :label="'Валюта 1'"
      :type="'text'"
      :placeholder="'Введите название или код'"
      :value.sync="currentCurrency"
    />
    <BaseInput
      :label="'Валюта 2'"
      :type="'text'"
      :placeholder="'Введите название или код'"
      :disabled="true"
      :value="'RUB'"
      class="mt-[5px] md:mt-0"
    />
    <BaseInput
      :label="'Количество'"
      :type="'number'"
      :placeholder="'Введите число'"
      :value.sync="currentCount"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      currentCurrency: null,
      currentCount: null,
    };
  },
  watch: {
    currentCurrency() {
      if (this.firstCurrency !== this.currentCurrency)
        this.updateCurrency(this.currentCurrency);
    },
    currentCount() {
      if (this.count !== this.currentCount) this.updateCount(this.currentCount);
    },
  },
  computed: {
    ...mapGetters(["firstCurrency", "count"]),
  },
  methods: {
    ...mapMutations(["updateCurrency", "updateCount"]),
  },
  mounted() {
    this.currentCurrency = this.firstCurrency;
    this.currentCount = this.count;
  },
};
</script>
