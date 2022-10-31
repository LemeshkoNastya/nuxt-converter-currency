<template>
  <ul class="flex flex-col gap-y-[12px] md:gap-y-[18px] 2xl:gap-y-[20px]">
    <li
      v-for="item in list"
      :key="item.id"
      class="flex items-center gap-x-[9.6px] md:gap-x-[10px] xl:gap-x-[8.35px] 2xl:gap-x-[10.35px]"
    >
      <div
        class="w-[7.8px] md:w-[8.1px] 2xl:w-[10px] h-[7.8px] md:h-[8.1px] 2xl:h-[10px] border-[2px] border-red rounded-[50%]"
      ></div>
      <span
        class="font-roboto text-text-main text-14 md:text-13 xl:text-14 2xl:text-18 leading-[18px] md:leading-[15px] xl:leading-[18px] 2xl:leading-[20px]"
      >
        {{ item.text }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>
