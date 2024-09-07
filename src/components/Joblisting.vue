<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

defineProps({
    job: Object
})
const emit = defineEmits(['delete']);


const deleteJob = async (id) => {
    try {
            const response = await axios.delete(`https://sazzad46031.github.io/vue-json-server-api/jobs.json/jobs/${id}`)
            emit('delete', id);
            console.log('deleted')
        } catch (error) {
            console.error('error deleting job')
        }
}
</script>

<template>
    <div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img :src='job.image' alt="Shoes" />
            </figure>
            <div className="card-body bg-green-200">
                <h2 className="card-title">{{ job.title }}</h2>
                <p>{{ job.type }}</p>
                <p>{{ job.description }}</p>
                <p>{{ job.salary }}</p>
                <p>{{ job.location }}</p>
                <p>{{ job.companyName }}</p>
                <div className="card-actions justify-end">
                    <RouterLink :to="{ name: 'editJob', params: { id: job.id } }">
                        <button className="btn btn-primary">Edit</button>
                    </RouterLink>
                    <button @click="deleteJob(job.id)" className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>