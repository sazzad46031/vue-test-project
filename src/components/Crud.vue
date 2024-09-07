<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import Joblisting from './Joblisting.vue';

const jobs = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('https://sazzad46031.github.io/vue-json-server-api/jobs.json/jobs')
        jobs.value = response.data
    } catch (error) {
        console.error('error fetching job')
    }
})

const handleDeleteJob = (id) => {

    jobs.value = jobs.value.filter(job => job.id !== id);
    console.log(`Job with ID ${id} removed from local state.`);
};

</script>

<template>
    <h1 class="text-5xl text-center">Job Listing</h1>
    <div class="grid grid-cols-3 max-w-screen-2xl mx-auto pt-16 gap-10">
        <Joblisting v-for="job in jobs" :key="job.id" :job="job" @delete="handleDeleteJob"></Joblisting>
    </div>
    
</template>