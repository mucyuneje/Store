<template>
    <div class="flex justify-center items-center min-h-screen bg-slate-900 py-6">
        <!-- Hire Me Form Section -->
        <section class="bg-gray-800 p-8 rounded-lg shadow-xl w-4/6 max-w-4xl space-y-10">
            <!-- Hire Me Header -->
            <div class="text-center text-white mb-8">
                <h1 class="text-3xl font-semibold">Hire Me</h1>
                <p class="text-gray-400 mt-2">
                    Looking for a developer to bring your ideas to life? Fill out the form below and I’ll get in touch
                    to discuss your project!
                </p>
            </div>

            <!-- Hire Me Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Name Field -->
                    <div>
                        <label for="name" class="block text-white">Your Name</label>
                        <input type="text" id="name" v-model="name"
                            class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name" required />
                    </div>
                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-white">Your Email</label>
                        <input type="email" id="email" v-model="email"
                            class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email" required />
                    </div>
                </div>

                <!-- Project Type Field -->
                <div>
                    <label for="projectType" class="block text-white">Project Type</label>
                    <select id="projectType" v-model="projectType"
                        class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI/ML Project">AI/ML Project</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <!-- Project Timeline Field -->
                <div>
                    <label for="timeline" class="block text-white">Project Timeline</label>
                    <input type="text" id="timeline" v-model="timeline"
                        class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="How soon would you like to start?" required />
                </div>

                <!-- Message Field -->
                <div>
                    <label for="message" class="block text-white">Message</label>
                    <textarea id="message" v-model="message" rows="5"
                        class="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tell me about your project..." required></textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center">
                    <button type="submit"
                        class="px-6 py-3 text-white bg-green-500 hover:bg-green-400 rounded-md transition duration-300">
                        Send Inquiry
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Form data
const name = ref('');
const email = ref('');
const projectType = ref('Web Development');
const timeline = ref('');
const message = ref('');

// Form submission handler
const handleSubmit = () => {
    const templateParams = {
        name: name.value,
        email: email.value,
        projectType: projectType.value,
        timeline: timeline.value,
        message: message.value,
    };

    emailjs
        .send(
            'service_w8jr03c', // Replace with your EmailJS Service ID
            'template_rrifnb3', // Replace with your EmailJS Template ID
            templateParams,
            '1GObBcoXBV98hOHDt' // Replace with your EmailJS User ID
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your inquiry has been sent successfully!');
                // Reset form
                name.value = '';
                email.value = '';
                projectType.value = 'Web Development';
                timeline.value = '';
                message.value = '';
            },
            (error) => {
                console.error('FAILED...', error);
                alert('Failed to send inquiry. Please try again later.');
            }
        );
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
