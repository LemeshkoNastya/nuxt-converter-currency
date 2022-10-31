<template>
  <header
    class="flex items-center h-[50px] sm:h-[40px] 2xl:h-[46px] bg-gray px-[5.5%] md:px-[1.8%] xl:px-[0.8%] 2xl:px-0"
  >
    <ul
      class="flex gap-x-[31px] md:gap-x-[48px] xl:gap-x-[32px] 2xl:gap-x-[34px] container"
    >
      <li class="flex items-center">
        <NuxtLink
          to="/"
          class="font-roboto font-medium text-text-gray-500 text-12 leading-[14px]"
        >
          Калькулятор
        </NuxtLink>
      </li>
      <li class="flex items-center">
        <NuxtLink
          to="/ruble"
          class="font-roboto font-medium text-text-gray-500 text-12 leading-[14px]"
        >
          Курс рубля
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
.nuxt-link-exact-active {
  color: #343434;
}
</style>
