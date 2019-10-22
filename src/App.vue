<template>
  <div class="bg-dark min-h-screen">
    <div class="pb-6 pt-12">
      <div class="container">
        <img src="anthem.svg" class="h-8"></img>
      </div>
    </div>
    <div class="container py-8">
      <div class="flex items-center pb-6">
        <h1 class="text-white uppercase mr-3">Member (Dummy data)</h1>
        <div class="h-px w-full bg-light"></div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div v-for="stat in statsMember" class="md:w-1/3 lg:w-1/4 p-3">
          <div class="bg-accent border border-light rounded shadow-lg p-6">
            <h1 class="h-12 uppercase text-sm text-white pb-3 border-b border-blue-700"> {{ stat.title }} </h1>
            <h2 class="text-6xl font-semibold py-4 text-white"> {{ stat.number }} <span class="text-4xl"> {{ stat.unit }} </span></h2>
            <div class="flex items-center">
              <div v-if="stat.number > stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-green-500">arrow_upward</i></div>
              <div v-if="stat.number < stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-red-500">arrow_downward</i></div>
              <div v-if="stat.number === stat.numberOld"><p class="text-xs uppercase text-white">~</p></div>
              <p :class="`text-xs uppercase ml-2 ${stat.number > stat.numberOld ? 'text-green-500' : 'text-white'} ${stat.number < stat.numberOld ? 'text-red-500' : 'text-white'}`"> {{ Math.abs(stat.number - stat.numberOld).toFixed(2) }}<span> {{ stat.unit }} </span> since last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-8">
      <div class="flex items-center pb-6">
        <h1 class="text-white uppercase mr-3">Operational (Dummy data)</h1>
        <div class="h-px w-full bg-light"></div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div v-for="stat in statsOperational" class="md:w-1/3 lg:w-1/4 p-3">
          <div class="bg-accent border border-light rounded shadow-md p-6">
            <h1 class="h-12 uppercase text-sm text-white pb-3 border-b border-blue-700"> {{ stat.title }} </h1>
            <h2 class="text-6xl font-semibold py-4 text-white"> {{ stat.number }} <span class="text-4xl"> {{ stat.unit }} </span></h2>
            <div class="flex items-center">
              <div v-if="stat.number > stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-green-500">arrow_upward</i></div>
              <div v-if="stat.number < stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-red-500">arrow_downward</i></div>
              <div v-if="stat.number === stat.numberOld"><p class="text-xs uppercase text-white">~</p></div>
              <p :class="`text-xs uppercase ml-2 ${stat.number > stat.numberOld ? 'text-green-500' : 'text-white'} ${stat.number < stat.numberOld ? 'text-red-500' : 'text-white'}`"> {{ Math.abs(stat.number - stat.numberOld).toFixed(2) }}<span> {{ stat.unit }} </span> since last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="container">
      <div class="border-t py-8 border-light">
        <img src="anthem.svg" class="h-5"></img>
        <p class="py-4 text-xs text-gray-300">© Copyright 2019</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      statsMember: [
        {title: 'Member Use Overall Population', number: '12', numberOld: '11', unit: '%'},
        {title: 'Member Ratio with Anthem Anywhere', number: '33', numberOld: '30', unit: '%'},
        {title: 'Member Re-Use', number: '65', numberOld: '68', unit: '%' },
        {title: 'Member Success Rate', number: '85', numberOld: '70', unit: '%'},
        {title: 'Member Success Rate 1st Conversation', numberOld: '70', number: '69', unit: '%'},
        {title: 'Member Re-Use based on Success/Failure', number: '63', numberOld: '63', unit: '%'}
      ],
      statsOperational: [
        {title: 'Updated Impact Change for Fixes', number: '81', numberOld: '70', unit: '%'},
        {title: 'Ambiguous Rate', number: '72', numberOld: '70', unit: '%'},
        {title: 'Avg Response Time', number: '3', numberOld: '3', unit: 'seconds' },
        {title: 'Number of Re-Directs Post Success', number: '46', numberOld: '40', unit: '' },
        {title: 'App Ratings', number: '4.7', numberOld: '4.6', unit: ''}
      ]
    };
  },
  computed: {
    difference () {
      return this.number - this.numberOld;
    },
  }
};
</script>
