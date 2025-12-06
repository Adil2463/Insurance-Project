<script setup>

</script>

<template>
    <div class="flex  items-center justify-center h-screen  ">
        <div class="  p-10 w-[560px] bg-[#FFFFFF] rounded-xl shadow-md" >
            <div class="flex flex-col  gap-10 ">
                <div class="flex flex-col items-center">
                    <img class="aspect-67/75 " src="../assets/images/loginpage/loginpagelogo.svg" alt="">
                </div>
                <div class="flex flex-col gap-6" >
                    <div class="flex flex-col gap-2">
                        <label class="font-['Inter'] text-[#0D1A12] font-medium not-italic" for="">Email</label>
                        
                        <div class="flex items-center rounded border border-[#D2D2D2] bg-[#F7FAFA]  gap-3 py-3 px-[15px]  w-full ">
                            <img src="../assets/images/loginpage/email.svg" alt="">
                            <input class="w-full text-[16px] font-['Inter'] font-normal not-italic text-[#868686] leading-5 outline-none  " type="text">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class=" font-['Inter'] text-[#0D1A12] font-medium not-italic" for="">Password</label>
                        <div class="flex items-center rounded border border-[#D2D2D2] bg-[#F7FAFA]  gap-3 py-3 px-[15px]  w-full ">
                            <img src="../assets/images/loginpage/password.svg" alt="">
                            <input class="w-full text-[16px] font-['Inter'] font-normal not-italic text-[#868686]  leading-5 outline-none  " type="text">
                        </div>
                    </div>
                </div>
                <div class=" flex items-center justify-center bg-[#59D19D] min-w-[120px] max-w-[480px] py-0 px-4 h-[46px] rounded cursor-pointer ">
                    <button class="leading-5 text-sm  not-italic font-bold text-[#FFF] font-['Inter'] cursor-pointer ">Login</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

