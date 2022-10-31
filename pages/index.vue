<template>
  <div class="content">
    <AppHeader />
    <main class="container">
      <h1
        class="mt-[17px] md:mt-[20px] xl:mt-[36px] 2xl:mt-[30px] font-roboto font-bold sm:font-medium text-primary text-20 md:text-26 2xl:text-34 leading-[28px] md:leading-[30px] 2xl:leading-[40px]"
      >
        Валютный калькулятор
      </h1>
      <div
        class="flex flex-col md:flex-row mt-[16px] md:mt-[24px] xl:mt-[34px]"
      >
        <div
          class="flex flex-col gap-y-[19px] md:pl-[5px] md:pr-[18px] md:w-[50%] md:gap-y-[20px] xl:pl-0 xl:pr-[24px] xl:gap-y-[20px] 2xl:pr-[21px] 2xl:gap-y-[31px]"
        >
          <CalculatorForm />
          <BaseInfo :attention="true">
            <div
              class="font-roboto font-bold text-primary text-14 md:text-16 xl:text-20 2xl:text-24 leading-[140%]"
            >
              <span>Итого:</span>
              <span>{{ resultCalculator }}</span>
            </div>
          </BaseInfo>
        </div>
        <CalculatorInfo />
      </div>
    </main>
    <CalculatorFooter />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  watch: {
    firstCurrency() {
      this.updateResult();
    },
    count() {
      this.updateResult();
    },
  },
  computed: {
    ...mapGetters([
      "listCurrencies",
      "firstCurrency",
      "count",
      "resultCalculator",
    ]),
  },
  methods: {
    ...mapMutations(["updateResultCalculator"]),
    ...mapActions(["getListCurrencies"]),
    currentCurrency() {
      let currency = null;
      if (this.listCurrencies.length > 0) {
        currency = this.listCurrencies.find(
          (curr) =>
            this.firstCurrency.toString().toLowerCase() ===
              curr.CharCode.toString().toLowerCase() ||
            this.firstCurrency.toString().toLowerCase() ===
              curr.Name.toString().toLowerCase() ||
            this.firstCurrency.toString().toLowerCase() ===
              curr.NumCode.toString().toLowerCase()
        );
      }
      return currency;
    },
    updateResult() {
      let result = "...";

      if (this.firstCurrency && this.count) {
        const currency = this.currentCurrency();

        if (currency) {
          result = ((this.count * currency.Value) / currency.Nominal).toFixed(
            2
          );
        }
      }

      this.updateResultCalculator(result);
    },
  },
  mounted() {
    this.getListCurrencies();
  },
};
</script>
