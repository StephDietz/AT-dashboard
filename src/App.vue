<template>
  <div class="bg-darkest min-h-screen">
    <div class="pb-6 pt-12">
      <div class="container">
        <img src="anthem.svg" class="h-8"></img>
      </div>
    </div>
    <div class="container bg-dark rounded-lg my-12">
      <h1 class="p-6 text-white uppercase mr-3 flex-none">Reporting Review 2019</h1>
      <div class="flex items-center">
        <button @click="member = true, operational = false" :class="`focus:outline-none w-1/2 p-5 ${ member ? 'bg-chosen border-t border-blue-700' : ''}`" style="border-radius:8px 8px 0px 0px;">
          <h1 class="text-sm uppercase text-gray-400">Member (Dummy Data)</h1>
        </button>
        <button @click="operational = true, member = false" :class="`focus:outline-none w-1/2 p-5 ${ operational ? 'bg-chosen border-t border-blue-700' : ''}`" style="border-radius:8px 8px 0px 0px;">
          <h1 class="text-sm uppercase text-gray-400">Operational (Dummy Data)</h1>
        </button>
      </div>
    <div class="bg-chosen p-5">
    <div class="">
      <div class="flex items-center pt-4 pb-8">
        <button @click="oneWeek = true, oneMonth = false, threeMonths = false, oneYear = false" :class="`focus:outline-none ml-4 border text-xs border-blue-700 px-2 uppercase text-gray-400 rounded-full ${ oneWeek ? 'bg-blue-700' : ''}`">
          One Week
        </button>
        <button @click="oneMonth = true, oneWeek = false, threeMonths = false, oneYear = false" :class="`focus:outline-none ml-4 border text-xs border-blue-700 px-2 uppercase text-gray-400 rounded-full ${ oneMonth ? 'bg-blue-700' : ''}`">
          One Month
        </button>
        <button @click="threeMonths = true, oneWeek = false, oneMonth = false, oneYear = false" :class="`focus:outline-none ml-4 border text-xs border-blue-700 px-2 uppercase text-gray-400 rounded-full ${ threeMonths ? 'bg-blue-700' : ''}`">
          Three Months
        </button>
        <button @click="oneYear = true, oneWeek = false, oneMonth = false, threeMonths = false" :class="`focus:outline-none ml-4 border text-xs border-blue-700 px-2 uppercase text-gray-400 rounded-full ${ oneYear ? 'bg-blue-700' : ''}`">
          One Year
        </button>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div v-if="member === true" v-for="stat in statsMember" class="md:w-1/3 lg:w-1/4 p-2">
          <div class="bg-light border border-light rounded shadow-md p-6">
            <div class="flex border-b border-blue-700 pb-s">
              <h1 class="w-11/12 h-12 uppercase text-sm text-white"> {{ stat.title }} </h1>
              <div class="bg-blue-700 text-white w-4 h-4 rounded-full flex items-center font-bold justify-center" style="font-size: 9px;" @mouseenter="stat.show = true" @mouseleave="stat.show = false">i</div>
              <div v-if="stat.show" class="absolute rounded shadow border border-lightest w-1/6 p-3 bg-light -ml-2 text-left mt-4">
                <p class="text-xs text-white"> {{ stat.description }} </p>
              </div>
            </div>
            <div class="flex items-end py-4">
              <h2 class="flex-none text-6xl font-semibold text-white"> {{ stat.number }} <span class="text-4xl"> {{ stat.unit }} </span></h2>
              <p class="text-lightest uppercase pb-5 ml-2" style="font-size: 11px;">updated {{ stat.date }}</p>
            </div>
            <div class="flex items-center">
              <div v-if="stat.number > stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-green-500">arrow_upward</i></div>
              <div v-if="stat.number < stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-red-500">arrow_downward</i></div>
              <div v-if="stat.number === stat.numberOld"><p class="text-xs uppercase text-white">~</p></div>
              <p :class="`text-xs uppercase ml-2 ${stat.number > stat.numberOld ? 'text-green-500' : 'text-white'} ${stat.number < stat.numberOld ? 'text-red-500' : 'text-white'}`"> {{ Math.abs(stat.number - stat.numberOld).toFixed(2) }}<span> {{ stat.unit }} </span> since last month</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div v-if="operational === true" v-for="stat in statsOperational" class="md:w-1/3 lg:w-1/4 p-2">
          <div class="bg-light border border-light rounded shadow-md p-6">
            <div class="flex border-b border-blue-700 pb-s">
              <h1 class="w-11/12 h-12 uppercase text-sm text-white"> {{ stat.title }} </h1>
              <div class="bg-blue-700 text-white w-4 h-4 rounded-full flex items-center font-bold justify-center" style="font-size: 9px;" @mouseenter="stat.show = true" @mouseleave="stat.show = false">i</div>
              <div v-if="stat.show" class="absolute rounded shadow border border-lightest w-1/6 p-3 bg-light -ml-2 text-left mt-4">
                <p class="text-xs text-white"> {{ stat.description }} </p>
              </div>
            </div>
            <div class="flex items-end py-4">
              <h2 class="flex-none text-6xl font-semibold text-white"> {{ stat.number }} <span class="text-4xl"> {{ stat.unit }} </span></h2>
              <p class="text-lightest uppercase pb-5 ml-2" style="font-size: 11px;">updated {{ stat.date }}</p>
            </div>
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
      member: true,
      operational: false,
      oneWeek: true,
      oneMonth: false,
      threeMonths: false,
      oneYear: false,
      statsMember: [
        {title: 'Member Use Overall Population', number: '12', numberOld: '11', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah what if this one is waaay lonher than the others how will it fit.', show: false },
        {title: 'Member Ratio with Anthem Anywhere', number: '33', numberOld: '30', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false},
        {title: 'Member Re-Use', number: '65', numberOld: '68', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false },
        {title: 'Member Success Rate', number: '85', numberOld: '70', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false},
        {title: 'Member Success Rate 1st Conversation', numberOld: '70', number: '69', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false},
        {title: 'Member Re-Use based on Success/Failure', number: '63', numberOld: '63', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false}
      ],
      statsOperational: [
        {title: 'Updated Impact Change for Fixes', number: '81', numberOld: '70', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false},
        {title: 'Ambiguous Rate', number: '72', numberOld: '70', unit: '%', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false},
        {title: 'Avg Response Time', number: '3', numberOld: '3', unit: 'sec.', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false },
        {title: 'Number of Re-Directs Post Success', number: '46', numberOld: '40', unit: '', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false },
        {title: 'App Ratings', number: '4.7', numberOld: '4.6', unit: '', date: '8/10/2019', description: 'Whatever the description of this is blah blah blah.', show: false}
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
