<template>
	<div class="bg-gray-800 flex min-h-screen flex-column">
		<div class="flex-1 flex place-items-center">
			<div class="w-full">
				<div class="max-w-4xl mx-auto">
					<label for="add_video" v-show="video == null" class="hover:text-blue-500 cursor-pointer font-bold transition duration-300 hover:bg-gray-700 grid place-content-center w-full border-4 border-dashed border-gray-500 rounded-lg h-96 p-4 text-center text-gray-400">
						<span>Scegli un video da riprodurre</span>
						<input id="add_video" class="hidden" @change="loadFile" type="file" accept="video/*" />
					</label>
					<div v-show="video != null">
						<video :src="video" class="w-full h-full focus:outline-none" :class="{ 'object-cover': cropped }" controls controlsList="nodownload"></video>
					</div>

					<div v-show="controls">
						<div class="mt-8 flex justify-center">
							<div class="rounded-md shadow">
								<button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" @click="cropped = !cropped">
									<span v-if="!cropped" class="inline-flex items-center">
										Adatta allo schermo
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-3">
											<path stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4" />
										</svg>
									</span>
									<span v-else class="inline-flex items-center">
										Adattato
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-3">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
										</svg>
									</span>
								</button>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<label for="change_video" class="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-500 hover:bg-blue-50 focus:outline-none focus:ring focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
									<span>Scegli un altro video</span>
									<input id="change_video" class="hidden" @change="loadFile" type="file" accept="video/*" />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { ref, reactive } from "vue";

	export default {
		name: "App",
		setup() {
			const video = ref(null);
			const controls = ref(false);
			const cropped = ref(false);

			function loadFile(e: Event): void {
				const target = e.target as HTMLInputElement;
				const newVideo = (target.files as FileList)[0];

				video.value = URL.createObjectURL(newVideo);

				controls.value = true;
			}

			return { video, controls, cropped, loadFile };
		},
	};
</script>
