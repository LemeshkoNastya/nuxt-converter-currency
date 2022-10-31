<template>
  <li
    class="pt-[26px] px-[24.15px] pb-[30px] md:px-[30px] md:pt-[39px] md:pb-[48.3px] xl:pt-[46px] xl:pt-[40px] xl:px-[24.15px] 2xl:pt-[40px] 2xl:pb-[46px] 2xl:px-[30px] w-[330px] md:w-[345.85px] xl:w-[370px] 2xl:w-[460px] bg-gray rounded-[16px] cursor-pointer hover:drop-shadow-primary"
  >
    <div
      class="flex justify-center items-center w-[50px] h-[50px] md:w-[52px] md:h-[52px] xl:w-[56px] xl:h-[56px] 2xl:w-[70px] 2xl:h-[70px] border-[4px] rounded-tr-[15px] rounded-bl-[15px]"
      :class="red ? 'border-red' : 'border-primary'"
    >
      <svg
        class="w-[28.5px] h-[28.6px] md:w-[29.65px] md:h-[29.75px] xl:w-[32px] xl:h-[32px] 2xl:w-[40px] 2xl:h-[40px] fill-blue"
        :class="red ? 'fill-red' : 'fill-blue'"
      >
        <use xlink:href="@/assets/icons/icons.svg#cash"></use>
      </svg>
    </div>
    <h4
      class="mt-[20px] md:mt-[30px] xl:mt-[25px] 2xl:mt-[28px] font-roboto font-bold text-primary text-17 md:text-18 xl:text-20 leading-[140%]"
    >
      {{ currency.CharCode }}
    </h4>
    <p
      class="mt-[5px] md:mt-[18px] xl:mt-[15px] font-roboto text-text-gray-950 text-14 xl:text-15 2xl:text-16 leading-[140%]"
    >
      {{ currency.Name }}
    </p>
    <BaseList
      :list="infoRate"
      class="mt-[20px] md:mt-[35px] xl:mt-[30px] 2xl:gap-y-[12px] font-medium text-text-gray-950 md:text-14 xl:text-15 2xl:text-16 xl:leading-[20px]"
    />
  </li>
</template>

<script>
export default {
  props: ["currency", "red"],
  computed: {
    infoRate() {
      const objDenomination = {
        id: "Nominal",
        text: "Номинал: " + this.currency.Nominal,
      };
      const objRate = {
        id: "Value",
        text: "Курс: " + this.currency.Value,
      };
      return [objDenomination, objRate];
    },
  },
};
</script>
