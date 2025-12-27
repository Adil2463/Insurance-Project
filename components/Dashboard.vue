<script setup>

const rows = [{
    id: 'ID00001',
    insured: 'John Doe',
    address: '217 SW Akron Ave Stuart, FL 34994',
    createdAt: 'Today at 10:00 AM',
    premium: '$1,200'
},
{
    id: 'ID00002',
    insured: 'Jane Smith',
    address: '123 Main St Springfield, IL 62701',
    createdAt: 'Yesterday at 2:30 PM',
    premium: '$950'
},
{
    id: 'ID00003',
    insured: 'Michael Johnson',
    address: '456 Oak St Austin, TX 73301',
    createdAt: 'June 10, 2024 at 11:15 AM',
    premium: '$1,500'
},{
    id: 'ID00004',
    insured: 'Emily Davis',
    address: '789 Pine St Seattle, WA 98101',
    createdAt: 'June 12, 2024 at 9:45 AM',
    premium: '$1,250'
},{
    id: 'ID00005',
    insured: 'David Wilson',
    address: '321 Maple St Denver, CO 80201',
    createdAt: 'June 14, 2024 at 4:20 PM',
    premium: '$1,100'
},{
    id: 'ID00006',
    insured: 'Sarah Brown',
    address: '654 Cedar St Miami, FL 33101',
    createdAt: 'June 15, 2024 at 1:10 PM',
    premium: '$1,300'
},{
    id: 'ID00007',
    insured: 'Chris Taylor',
    address: '987 Birch St Boston, MA 02101',
    createdAt: 'June 16, 2024 at 3:55 PM',
    premium: '$1,400'
},{
    id: 'ID00008',
    insured: 'Amanda Martinez',
    address: '159 Walnut St Chicago, IL 60601',
    createdAt: 'June 17, 2024 at 10:05 AM',
    premium: '$1,350'
},{
    id: 'ID00009',
    insured: 'Joshua Anderson',
    address: '753 Spruce St San Francisco, CA 94101',
    createdAt: 'June 18, 2024 at 12:30 PM',
    premium: '$1,450'
},{
    id: 'ID00010',
    insured: 'Olivia Thomas',
    address: '852 Chestnut St New York, NY 10001',
    createdAt: 'June 19, 2024 at 2:15 PM',
    premium: '$1,600'
},{
    id: 'ID00010',
    insured: 'Olivia Thomas',
    address: '852 Chestnut St New York, NY 10001',
    createdAt: 'June 19, 2024 at 2:15 PM',
    premium: '$1,600'
}
]

</script>


<template>
    <div>
        <div class="px-10 pt-3 pb-3.5">
            <div class="flex justify-between items-center ">
                <div class="flex items-center gap-8  ">
                    <div>
                        <img src="../assets/images/dashboard page/dashboard logo.svg" alt="">
                    </div>
                    <div>
                        <ul class="flex items-center gap-9 ">
                            <li class="text-[#121714] text-sm font-['Inter'] font-medium not-italic leading-normal cursor-pointer"><a href=""></a>Dashboard</li>
                            <li class="text-[#121714] text-sm font-['Inter'] font-medium not-italic leading-normal cursor-pointer"><a href=""></a>Reports</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/dashboard page/dasshboard img.svg" alt="">
                </div>
            </div>
            <div class="mt-6">
                <p class="text-[#59D19D] font-['Inter'] text-[12px] not-italic font-normal leading-normal">Welcome to <span class="italic">Wiglesworth</span>-Rindom Insurance,</p>
                <p class="text-[#214869] font-['Inter'] text-2xl font-bold leading-normal not-italic  ">Homeowner Insurance</p>
            </div>
            <div class="flex justify-between gap-6">
                <div class="flex px-[15px] bg-[#F7FAFA] py-3 border border-solid border-[#D2D2D2] rounded-sm  w-[1150px] ">
                    <img class="w-[18px] h-[18px]" src="../assets/images/dashboard page/dashboardsearch.svg" alt="">
                    <input type="text" class="w-full h-5 ml-0.5 text-[#000000] text-base font-['Inter'] font-normal not-italic leading-5  ">
                </div>
                <div class="bg-[#59D19D] rounded-sm px-4 flex justify-center items-center cursor-pointer ">
                    <button class=" text-[#FFFFFF] text-center font-['Inter'] text-sm leading-[21px] not-italic font-bold  cursor-pointer ">GET A PREMIUM</button>
                </div>
            </div>
            <div class="mt-7">
                <table class="border border-solid border-[#D2D2D2] rounded-sm ">
                    
                    <thead class=" bg-[#F7FAFA]">
                        <tr class=" ">
                            <th class="px-4 py-3 w-[140px] text-start justify-center items-start text-sm font-medium not-italic leading-5 text-[#868686]">ID</th>
                            <th class="px-4 py-3 w-60 text-start justify-center items-start text-sm font-medium not-italic leading-5 text-[#868686]">Insured</th>
                            <th class="px-4 py-3 w-[530px] text-start justify-center items-start text-sm font-medium not-italic leading-5 text-[#868686]">Address</th>
                            <th class="px-4 py-3 w-[250px] text-start justify-center items-start text-sm font-medium not-italic leading-5 text-[#868686]">Created At</th>
                            <th class="px-4 py-3 w-[180px] text-start justify-center items-start text-sm font-medium not-italic leading-5 text-[#868686]">Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="even:bg-[#F0F5F2] odd:bg-[#F7FAFA]"
                        v-for="(row, index) in rows" :key="index"
                        >
                            <td class="px-4 py-3 text-[#0D1A12] text-sm not-italic font-normal leading-5 font-['Inter']">{{ row.id }}</td>
                            <td class="px-4 py-3 text-[#0D1A12] text-sm not-italic font-normal leading-5 font-['Inter']">{{ row.insured }}</td>
                            <td class="px-4 py-3 text-[#0D1A12] text-sm not-italic font-normal leading-5 font-['Inter']">{{ row.address }}</td>
                            <td class="px-4 py-3 text-[#0D1A12] text-sm not-italic font-normal leading-5 font-['Inter']">{{ row.createdAt }}</td>
                            <td class="px-4 py-3 text-[#0D1A12] text-sm not-italic font-normal leading-5 font-['Inter']">{{ row.premium }}</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
            
        </div>
    </div>
</template>

