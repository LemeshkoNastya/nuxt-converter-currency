<template>
  <footer class="md:container mb-[70px] mt-[20px] xl:mt-[24px] 2xl:mt-[40px]">
    <div
      class="flex flex-col md:flex-row pt-[20px] px-[15px] pb-[28px] md:pt-[26px] md:px-[19.65px] md:pb-[27px] xl:pt-[40px] xl:px-[32.5px] xl:pb-[36px] 2xl:pt-[55px] 2xl:px-[51px] 2xl:pb-[56px] bg-secondary md:rounded-[10px] xl:rounded-[16px]"
    >
      <div class="md:w-[54%] xl:mt-[5px] xl:w-[56%] 2xl:mt-0 2xl:w-[55%]">
        <h2
          class="font-roboto font-bold text-text-blue text-16 leading-[24px] text-center md:text-18 md:text-left md:font-medium xl:text-29 xl:leading-[36px] 2xl:text-36 2xl:leading-[46px]"
        >
          Нужна помощь? <br />
          Мы поможем! Просто свяжитесь с нами.
        </h2>
        <p
          class="mt-[10px] md:mt-[5px] md:max-w-[530px] xl:mt-[10px] font-roboto text-text-main text-12 leading-[14px] text-center md:text-10 md:leading-[12px] md:text-left xl:text-13 xl:leading-[18px] 2xl:text-16 2xl:leading-[24px]"
        >
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div
        class="flex flex-col items-center mt-[15px] mr-[10px] md:mt-[2px] md:mr-0 md:w-[46%] xl:mt-0 xl:w-[44%] 2xl:w-[45%]"
      >
        <a
          :href="`tel:${phone}`"
          class="font-roboto font-medium text-text-blue text-26 leading-[30px] md:text-24 md:leading-[28px] xl:text-40 xl:leading-[46px] 2xl:text-50"
        >
          {{ phone | formatPhone }}
        </a>
        <p
          class="mt-[5px] md:mt-[6px] md:mr-[5px] xl:mt-[20px] xl:mr-[25px] 2xl:mt-[25px] 2xl:mr-0 font-roboto text-text-main text-12 leading-[14px] uppercase xl:text-18 xl:leading-[21px] 2xl:text-24 2xl:leading-[28px] tracking-[1px]"
        >
          или
        </p>
        <a
          :href="`mailto:${email}`"
          class="mt-[5px] md:mt-0 xl:mt-[20px] xl:mr-[20px] 2xl:mt-[10px] 2xl:mr-0 font-roboto text-text-blue text-18 leading-[21px] md:text-20 md:leading-[23px] xl:text-24 xl:leading-[28px] 2xl:text-34 2xl:leading-[40px] tracking-[1px]"
        >
          {{ email }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import formatPhone from "@/assets/js/formatPhone.js";
import { mapState } from "vuex";

export default {
  filters: {
    formatPhone,
  },
  computed: {
    ...mapState(["phone", "email"]),
  },
};
</script>
