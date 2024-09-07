<script setup>
import axios from 'axios';

import { reactive, defineEmits } from 'vue';
const emit = defineEmits(['jobAdded']);
const form = reactive({
    title: '',
    image: '',
    type: '',
    description: '',
    salary: '',
    location: '',
    companyName: ''
})
const handleSubmit = async () => {
    const newJob = {
        title: form.title,
        image: form.image,
        type: form.type,
        description: form.description,
        salary: form.salary,
        location: form.location,
        companyName: form.companyName
    }

    try {
        const response = await axios.post('https://sazzad46031.github.io/vue-json-server-api/jobs.json/jobs', newJob)
        emit('jobAdded', response.data)
        
        form.title = '';
        form.image = '';
        form.type = '';
        form.description = '';
        form.salary = '';
        form.location = '';
        form.companyName = '';
    } catch (error) {
        console.error('error posting job')
    }
}

</script>

<template>
    <div class="max-w-screen-2xl mx-auto p-10">
        <h1 class="text-5xl text-center">Add Job</h1>
        <form @submit.prevent="handleSubmit">
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" name="Title" v-model="form.title"
                        className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image" name="Image" v-model="form.image"
                        className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" placeholder="Type" name="Type" v-model="form.type"
                        className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" name="Description" v-model="form.description"
                        className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Salary</span>
                    </label>
                    <input type="text" placeholder="Salary" name="Salary" v-model="form.salary"
                        className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="Location" name="Location" v-model="form.location"
                        className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" name="Company Name" v-model="form.companyName"
                        className="input w-full input-bordered" />
                </div>

            </div>
            <input type="submit" value="Add job" className="btn btn-block bg-purple-400" />
        </form>
    </div>
</template>