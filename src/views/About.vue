<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-900">
        <!-- Main Container for All Sections -->
        <section class="bg-gray-800 p-6 rounded-lg shadow-xl w-4/6 max-w-4xl space-y-10 my-7">

            <!-- Profile Section (Topmost) -->
            <div class="flex items-center gap-6 mb-8 border-b border-gray-700 pb-6">
                <img src="../assets/profile.jpg" alt="Profile Image" class="rounded-full w-32 h-32 object-cover">
                <div class="text-white">
                    <h1 class="text-3xl font-semibold">Mucyuneje Hirwa Arsène</h1>
                    <p class="text-gray-400">Software Developer | UI/UX Designer | AI/ML Expert</p>
                    <p class="mt-2">Location: Rwanda</p>
                </div>
            </div>

            <!-- Skills Section (Second Section) -->
            <div class="border-b border-gray-700 pb-6">
                <h2 class="text-xl text-white mb-4">Programming Skills</h2>
                <div class="space-y-2">
                    <div>
                        <span class="text-green-400">JavaScript</span>
                        <div class="w-full bg-gray-700 h-2 rounded-full">
                            <div class="bg-green-500 h-2 rounded-full" style="width: 90%"></div>
                        </div>
                    </div>
                    <div>
                        <span class="text-green-400">Python</span>
                        <div class="w-full bg-gray-700 h-2 rounded-full">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                    <div>
                        <span class="text-green-400">Vue.js</span>
                        <div class="w-full bg-gray-700 h-2 rounded-full">
                            <div class="bg-indigo-500 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                    <div>
                        <span class="text-green-400">AI/ML</span>
                        <div class="w-full bg-gray-700 h-2 rounded-full">
                            <div class="bg-yellow-500 h-2 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- More Details Section (Expandable) -->
            <div class="border-b border-gray-700 pb-6">
                <div class="flex justify-center mb-6">
                    <button @click="toggleAccordion" class="text-green-400 hover:text-green-300 text-xl">
                        {{ accordionOpen ? 'Hide Details' : 'Show More Details' }}
                    </button>
                </div>

                <div v-if="accordionOpen" class="text-gray-300">
                    <p>I am passionate about building innovative, user-friendly applications. I specialize in using AI
                        for
                        accessibility solutions, ensuring that people with visual impairments can better interact with
                        technology.</p>
                    <p>In my free time, I explore cutting-edge technologies like blockchain, AI, and machine learning,
                        and I
                        share my knowledge through mentorship and teaching.</p>
                </div>
            </div>

            <!-- Hobbies Section (New Section) -->
            <div class="border-b border-gray-700 pb-6">
                <h2 class="text-xl text-white mb-4">Hobbies</h2>
                <ul class="list-disc pl-6 text-gray-300">
                    <li>Reading about AI and machine learning</li>
                    <li>Experimenting with new technologies</li>
                    <li>Teaching and mentoring aspiring developers</li>
                    <li>Exploring nature and traveling</li>
                </ul>
            </div>

            <!-- Achievements Section (New Section) -->
            <div class="border-b border-gray-700 pb-6">
                <h2 class="text-xl text-white mb-4">Achievements</h2>
                <ul class="list-disc pl-6 text-gray-300">
                    <li>Developed an AI-driven accessibility tool for people with visual impairments</li>
                    <li>Completed certifications in AI and Machine Learning</li>
                    <li>Published articles on AI, UI/UX design, and web development</li>
                </ul>
            </div>

            <!-- Education Section (New Section) -->
            <div class="border-b border-gray-700 pb-6">
                <h2 class="text-xl text-white mb-4">Education</h2>
                <ul class="list-disc pl-6 text-gray-300">
                    <li>Bachelor's in Software Development, MSGR. Mubiligi Catholic TSS</li>
                    <li>Various online courses in AI/ML, Web Development, and UI/UX Design</li>
                </ul>
            </div>

            <!-- Social Media Links Section (Footer Section) -->
            <div class="flex justify-center space-x-6 pt-6">
                <a href="https://www.facebook.com/mucyuneje" target="_blank"
                    class="text-green-400 hover:text-green-300 text-2xl">
                    <span class="pi pi-facebook"></span>
                </a>
                <a href="https://github.com/mucyuneje/" target="_blank"
                    class="text-green-400 hover:text-green-300 text-2xl">
                    <span class="pi pi-github"></span>
                </a>
                <a href="https://www.instagram.com/mucyuneje/" target="_blank"
                    class="text-green-400 hover:text-green-300 text-2xl">
                    <span class="pi pi-instagram"></span>
                </a>
            </div>

        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const accordionOpen = ref(false);
const toggleAccordion = () => {
    accordionOpen.value = !accordionOpen.value;
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
