<template>
  <div
    class="flex flex-wrap content-between justify-between md:max-w-[86px] md:min-h-[247px] md:max-h-[247px] xl:max-w-[245px] xl:min-h-[240.2px] xl:max-h-[240.2px] 2xl:max-w-[307px] 2xl:min-h-[301px] 2xl:max-h-[301px]"
  >
    <img
      :src="require(`@/assets/images/${images[0].file}`)"
      :alt="images[0].name"
      class="w-[69.5px] h-[46.85px] md:w-[86px] md:h-[58px] xl:w-[116.5px] xl:h-[116.5px] 2xl:w-[146px] 2xl:h-[146px] rounded-tr-[15px] rounded-bl-[15px] xl:rounded-none"
    />
    <img
      :src="require(`@/assets/images/${images[1].file}`)"
      :alt="images[1].name"
      class="w-[69.5px] h-[46.85px] md:w-[86px] md:h-[58px] xl:w-[116.5px] xl:h-[116.5px] 2xl:w-[146px] 2xl:h-[146px] rounded-tl-[15px] rounded-br-[15px] xl:rounded-none xl:rounded-tr-[50px]"
    />
    <img
      :src="require(`@/assets/images/${images[2].file}`)"
      :alt="images[2].name"
      class="w-[69.5px] h-[46.85px] md:w-[86px] md:h-[58px] xl:w-[116.5px] xl:h-[116.5px] 2xl:w-[146px] 2xl:h-[146px] rounded-tr-[15px] rounded-bl-[15px] md:rounded-none md:rounded-tl-[15px] md:rounded-br-[15px] xl:rounded-none xl:rounded-bl-[50px]"
    />
    <img
      :src="require(`@/assets/images/${images[3].file}`)"
      :alt="images[3].name"
      class="w-[69.5px] h-[46.85px] md:w-[86px] md:h-[58px] xl:w-[116.5px] xl:h-[116.5px] 2xl:w-[146px] 2xl:h-[146px] rounded-tl-[15px] rounded-br-[15px] xl:rounded-none"
    />
  </div>
</template>

<script>
export default {
  props: ["images"],
};
</script>
