<script setup>
import { ref } from "vue";

const dob = ref(null);

function openCalendar() {
  dob.value.showPicker();
}
</script>

<template>
  <div class="px-10 pt-6 pb-3 w-full">
    <div>
      <p class="text-[#214869] font-['Inter'] text-2xl font-bold leading-normal not-italic">Client Information</p>
    </div>
    <div class="flex ">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">First Name</p>
          <div class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]">
            <input class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none" type="text">

          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">Last Name</p>
          <div class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]">
            <input class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none"  type="text">
          </div>
          
        </div>
      </div>

    </div>
    <div class="flex ">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">Email</p>
          <div class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]">
            <input class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none" type="email">

          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">Phone Number</p>
          <div class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]">
            <input class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none"  type="number">
          </div>
          
        </div>
      </div>

    </div>
    <div class="flex ">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">Date of Birth</p>
          <div class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]">
            <input ref="dob" class="w-full font-['Inter'] text-[#AAAAAA] text-base leading-5 not-italic font-normal outline-none " type="date">
            <img src="@/assets/images/clientinfo/calander.svg" class="cursor-pointer" @click="openCalendar()" alt="">
          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <div></div>
          <div class="flex justify-between items-center  mt-8">
            <p class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium">New Property</p>
            <img src="@/assets/images/clientinfo/toggle.svg" class="cursor-pointer w-[30px] h-[30px]" alt="">
          </div>

        </div>
      </div>

    </div>
   
    <div class="flex justify-end pt-7 pb-0 pl-4 pr-10">
      <div class="flex    gap-6">
        <Backbtn />
        <Nextbtn />
      </div>
    </div>
    
  </div>
  
</template>

<style>
    input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>