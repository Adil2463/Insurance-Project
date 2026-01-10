<script setup>

</script>

<template>
  <div class="px-10 pt-6 pb-3 w-full">
    <div class="">
      <p
        class="text-[#214869] font-['Inter'] text-2xl font-bold leading-normal not-italic"
      >
        Coverage
      </p>
    </div>
    <div class="flex">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Dwelling
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full  font-['Inter'] text-[#000000] placeholder:text-[#000000]  text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
          </div>
        </div>
        
      </div>
       <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Contents
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] placeholder:text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
          </div>
        </div>
        
      </div>
    </div>

    
    <div class="flex">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Other Structure
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] placeholder:text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
            
          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Loss Of Use
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] placeholder:text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
            
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Medical Payments
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] placeholder:text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
            <img src="@/assets/images/addressdetails/downarrow.svg" alt="">
          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Liability
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] placeholder:text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
              placeholder="$"
            />
            <img src="@/assets/images/addressdetails/downarrow.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-[50%] py-3 pr-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
          Liability
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
            />
            <img src="@/assets/images/addressdetails/downarrow.svg" alt="">
          </div>
        </div>
      </div>
      <div class="w-[50%] py-3 pl-3 gap-2">
        <div class="flex flex-col gap-2">
          <p
            class="font-['Inter'] text-base not-italic leading-normal text-[#0D1A12] font-medium"
          >
           Hurricane Deductible
          </p>
          <div
            class="w-full py-3 px-[15px] flex items-center rounded-sm border border-[#D2D2D2] bg-[#F7FAFA]"
          >
            <input
              class="w-full font-['Inter'] text-[#000000] text-base leading-5 not-italic font-normal outline-none"
              type="text"
            />
            <img src="@/assets/images/addressdetails/downarrow.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end pt-7 pb-0 pl-4 pr-10">
      <div class="flex gap-6">
        <Backbtn />
        <Nextbtn />
      </div>
    </div>
  </div>
</template>


