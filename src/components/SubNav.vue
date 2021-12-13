<template>
  <div class="bg-blue-900 grid grid-cols-[40%,60%] ">
    <ul class="text-right leading-9 w-full">
      <li class="text-white hover:bg-white hover:text-black font-bold pr-8">
        <a href="#" class=" ">Administration</a>
      </li>
      <li class="fle2x text-white  hover:bg-white hover:text-black font-bold pr-8">
        <a href="#" class=" ">Citoyen</a>
      </li>
      <li class="fl2ex text-white  hover:bg-white hover:text-black font-bold pr-8">
        <a href="#" class=" ">Culture</a>
      </li>
      <li class="fl2ex text-white  hover:bg-white hover:text-black font-bold pr-8">
        <a href="#" class=" ">Econome</a>
      </li>
    </ul>
    <div class="bg-white text-black pl-10">
      content <br/><br/>
      content
    </div>
  </div>
</template>
<template>
  <div class="m-5 w-full bg-teal-800 grid grid-cols-[50%,50%]">
    <ul class="relative text-white w-full">
      <li class="group hover:bg-white">
        Item 1
        <ul class="opac4ity-0 invi4sible absolute left-16 top-0 ulniv2 text-black bg-white w-full">
          <li>Item 1.1</li>
          <li>Item 1.2</li>
        </ul>
      </li>
      <li class="group">
        Item 2
        <ul class="opacity-0 invisible absolute left-16 top-0 ulniv2 text-black">
          <li>Item 2.1</li>
          <li>Item 2.2</li>
        </ul>
      </li>
      <li>Item 3</li>
    </ul>
  </div>

</template>
<style>
main {
  display: flex;
  flex-direction: row;
}

main article {
  flex: 2;
}

main aside {
  flex: 1;
}

.ulniv2 {
  @apply shadow-lg group-hover:visible group-hover:opacity-100 transition-all duration-500
}
</style>
