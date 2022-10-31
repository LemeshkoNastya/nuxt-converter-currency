<template>
  <div>
    <AppHeader />
    <main class="container">
      <h1
        class="mt-[17px] md:mt-[12px] md:ml-[10px] xl:mt-[30px] xl:ml-[5px] 2xl:mt-[16px] 2xl:ml-0 font-roboto font-bold text-primary text-20 md:text-26 2xl:text-36 leading-[140%]"
      >
        Курс рубля
      </h1>
      <RubleRateCards />
      <BaseInfo>
        <div
          class="flex flex-col md:flex-row gap-x-[5px] font-roboto font-bold text-primary text-16 md:text-18 xl:text-20 leading-[140%]"
        >
          <span>
            Телефон: <a href="tel:88008889028">8 (800) 888-90-28</a>,
          </span>
          <span>
            email: <a href="mailto:info@example.ru">info@example.ru</a>.
          </span>
        </div>
      </BaseInfo>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["listCurrencies"]),
  },
  methods: {
    ...mapActions(["getListCurrencies"]),
  },
  mounted() {
    console.log("ruble mounted");
    if (this.listCurrencies.length === 0) this.getListCurrencies();
  },
};
</script>
