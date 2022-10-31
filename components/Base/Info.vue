<template>
  <div
    class="flex rounded-[16px]"
    :class="
      attention
        ? 'items-center px-[26px] md:px-[27px] xl:px-[31px] pt-[19px] md:pt-[34px] xl:pt-[28.85px] 2xl:pt-[36.85px] pb-[20.85px] md:pb-[34.85px] xl:pb-[34px] 2xl:pb-[41.7px] gap-x-[19px] md:gap-x-[21px] xl:gap-x-[38px] 2xl:gap-x-[33px] bg-secondary'
        : 'flex-col md:flex-row md:items-center px-[28.5px] md:px-[25px] xl:px-[31px] pt-[32px] md:pt-[30.3px] xl:pt-[40px] 2xl:pt-[36.85px] pb-[32px] md:pb-[30.3px] xl:pb-[42px] 2xl:pb-[41.7px] gap-y-[29.6px] gap-x-[25px] xl:gap-x-[19.8px] 2xl:gap-x-[30px] bg-gray'
    "
  >
    <div
      class="flex justify-center items-center border-[3px] rounded-tr-[15px] rounded-bl-[15px]"
      :class="
        attention
          ? 'w-[42px] h-[42.15px] md:w-[40px] md:h-[39.15px] xl:w-[45px] xl:h-[45.15px] 2xl:w-[50px] 2xl:h-[48.5px] border-red'
          : 'w-[42.5px] h-[42.4px] md:w-[40px] md:h-[40.4px] xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[48.5px] border-primary'
      "
    >
      <svg
        :class="
          attention
            ? 'w-[9.65px] h-[22px] md:w-[9.2px] md:h-[20.35px] xl:w-[10.35px] xl:h-[23.5px] 2xl:w-[12px] 2xl:h-[26px] fill-red'
            : 'w-[9.75px] h-[22.05px] md:w-[9.15px] md:h-[21px] xl:w-[10.35px] xl:h-[23.4px] 2xl:w-[11.5px] 2xl:h-[25.2px] fill-blue'
        "
      >
        <use xlink:href="@/assets/icons/icons.svg#info"></use>
      </svg>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["attention"],
};
</script>
