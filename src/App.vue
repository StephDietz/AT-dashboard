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
        <button :class="`focus:outline-none w-1/2 p-5 ${ type === 'member' ? 'bg-chosen border-t border-blue-700' : ''}`" style="border-radius:8px 8px 0px 0px;" @click="type = 'member'">
          <h1 class="text-sm uppercase text-gray-400">Member (Dummy Data)</h1>
        </button>
        <button :class="`focus:outline-none w-1/2 p-5 ${ type === 'operational' ? 'bg-chosen border-t border-blue-700' : ''}`" style="border-radius:8px 8px 0px 0px;" @click="type = 'operational'">
          <h1 class="text-sm uppercase text-gray-400">Operational (Dummy Data)</h1>
        </button>
      </div>
    <div class="bg-chosen p-5">
    <div class="">
      <div class="flex items-center pt-4 pb-8">
        <button v-for="p in ['WEEK', 'MONTH', 'THREE MONTHS', 'YEAR']" :class="`focus:outline-none ml-4 border text-xs border-blue-700 px-2 uppercase text-gray-400 rounded-full ${ period === p ? 'bg-blue-700' : ''}`" @click="period = p">
          {{ p }}
        </button>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap">
        <div v-for="stat in stats" class="md:w-1/3 p-2">
          <div v-if="stat.type === type">
            <div class="bg-light border border-light rounded shadow-md p-6">
              <div class="flex border-b border-blue-700 pb-s">
                <h1 class="w-11/12 h-12 uppercase text-sm text-white"> {{ stat.title }} </h1>
                <div class="bg-blue-700 text-white w-4 h-4 rounded-full flex items-center font-bold justify-center" style="font-size: 9px;" @mouseenter="stat.show = true" @mouseleave="stat.show = false">i</div>
                <div v-if="stat.show" class="absolute rounded shadow border border-lightest  px-3 bg-lightest md:w-1/4 py-5 text-left mt-4">
                  <p class="text-xs text-white"> {{ stat.description }} </p>
                </div>
              </div>
              <div class="flex items-end py-4">
                <h2 class="flex-none text-6xl font-semibold text-white"> {{ stat.number }} <span class="text-4xl"> {{ stat.unit }} </span></h2>
                <p class="text-lightest uppercase text-sm pb-5 ml-2">updated {{ stat.date }}</p>
              </div>
              <div class="flex items-center">
                <div v-if="stat.number > stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-green-500">arrow_upward</i></div>
                <div v-if="stat.number < stat.numberOld" class="flex items-center justify-center"><i class="text-lg font-bold material-icons text-red-500">arrow_downward</i></div>
                <div v-if="stat.number === stat.numberOld"><p class="text-xs uppercase text-white">~</p></div>
                <p :class="`text-xs uppercase ml-2 ${stat.number > stat.numberOld ? 'text-green-500' : 'text-white'} ${stat.number < stat.numberOld ? 'text-red-500' : 'text-white'}`"> {{ Math.abs(stat.number - stat.numberOld).toFixed(2) }}<span> {{ stat.unit }} </span> over the last {{ period }}</p>
              </div>
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
      type: 'operational',
      period: 'MONTH',
      stats: [
        {type: 'member', title: 'Member Use Overall Population', number: '~', numberOld: '~', unit: '%', date: 'NA', description: 'The ratio of Chatbot\'s monthly active users compared to Anthem\'s overall population of users', show: false },
        {type: 'member', title: 'Member Ratio within Sydney Health Mobile App', number: '~', numberOld: '~', unit: '%', date: 'NA', description: 'todo', show: false},
        {type: 'member', title: 'Member Re-Use', number: '~', numberOld: '~', unit: '%', date: 'NA', description: 'todo', show: false },
        {type: 'member', title: 'Member Success Rate', number: '80.78', numberOld: '~', unit: '%', date: '10/23/2019', description: 'todo', show: false},
        {type: 'member', title: 'Member Success Rate 1st Conversation', numberOld: '~', number: '~', unit: '%', date: 'NA', description: 'todo', show: false},
        {type: 'member', title: 'Member Re-Use based on Success/Failure', number: '~', numberOld: '~', unit: '%', date: 'NA', description: 'todo', show: false},
        {type: 'operational', title: 'Updated Impact Change for Fixes', number: '~', numberOld: '70', unit: '%', date: '8/10/2019', description: 'todo', show: false},
        {type: 'operational', title: 'Ambiguous Rate', number: '8.51', numberOld: '~', unit: '%', date: '10/23/2019', description: 'todo', show: false},
        {type: 'operational', title: 'Avg Response Time', number: '~', numberOld: '~', unit: 'sec.', date: '8/10/2019', description: 'todo', show: false },
        {type: 'operational', title: 'Number of Re-Directs Post Success', number: '~', numberOld: '~', unit: '', date: '8/10/2019', description: 'todo', show: false },
        {type: 'operational', title: 'App Ratings', number: '4.7', numberOld: '4.0', unit: '', date: '10/01/2019', description: 'todo', show: false}
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
