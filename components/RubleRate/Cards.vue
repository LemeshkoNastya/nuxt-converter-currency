<template>
  <ul
    class="mt-[15px] grid grid-cols-1 gap-x-[30px] gap-y-[20px] justify-items-center mb-[20px] md:justify-items-start md:mt-[12px] md:mb-[25px] md:grid-cols-2 xl:mt-[25px] xl:mb-[48px] xl:grid-cols-3 2xl:mb-[30px] 3xl:gap-y-[50px]"
  >
    <BaseCard
      v-for="(currency, index) in listCurrencies"
      :key="currency.ID"
      :currency="currency"
      :red="!((index + 1) % 2)"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["listCurrencies"]),
  },
};
</script>
