<template>
  <div
    class="pt-[15px] md:w-[50%] md:pt-[5px] md:pl-[10px] md:pr-[5px] xl:pl-[15px] xl:pr-0"
  >
    <div
      class="px-[15px] pt-[26.25px] pb-[19.5px] md:px-[14px] md:pt-[24px] md:pb-[17.3px] xl:px-[24px] xl:pt-[28px] xl:pb-[34px] 2xl:px-[28px] 2xl:pt-[30px] 2xl:pb-[38px] bg-secondary border border-[#DFE1F0] rounded-[16px]"
    >
      <h4
        class="font-roboto font-medium text-primary uppercase text-13 xl:text-15 2xl:text-18 leading-[18px] xl:leading-[20px] 2xl:leading-[24px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor:
      </h4>
      <div
        class="flex flex-col md:flex-row gap-x-[34px] mt-[38px] md:mt-[25px] xl:mt-[28px] 2xl:mt-[40px]"
      >
        <BaseList :list="listCalculator" class="max-width-[]" />
        <BaseImagesCube
          :images="imagesCalculator"
          class="mt-[22px] md:mt-[5px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["imagesCalculator", "listCalculator"]),
  },
};
</script>
