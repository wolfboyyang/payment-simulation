<script lang="ts">
    import Stepper from "$lib/components/Stepper.svelte";
    import { ArrowRight, Expand, Shrink } from "@lucide/svelte";
    import { AppData, appState, nextStep } from "$lib/app-state.svelte";

    const stepData = $derived(AppData[appState.step]);
    const isLastStep = $derived(
        appState.step === 4 &&
            appState.page === AppData[appState.step].pages - 1,
    );

    let mainElement: HTMLElement;
    const fullscreenEnabled =
        typeof document !== "undefined" && document?.fullscreenEnabled;
    let isFullScreen = $state(false);
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            // If the document is not in full screen mode
            // make the video full screen
            mainElement.requestFullscreen();
            isFullScreen = true;
        } else {
            // Otherwise exit the full screen
            document.exitFullscreen?.();
            isFullScreen = false;
        }
    };
</script>

{#snippet prosConsList(title: string, items: string[], isPros: boolean)}
    <div class="w-full h-full p-2">
        <h3 class="text-sm md:text-xl font-bold mb-1 md:mb-4">
            {title}
        </h3>
        <div class="w-full space-y-1 md:space-y-4">
            {#each items as item}
                <div
                    class={`w-full flex items-center justify-between p-2 h-12 rounded-lg shadow-md transition duration-300
                ${isPros ? "bg-[#10b003]" : "bg-[#ff0000]"}`}
                >
                    <span class="w-full text-xs md:text-sm font-bold text-white"
                        >{item}</span
                    >
                    <div class="h-full">
                        {#if isPros}
                            <enhanced:img
                                src="$lib/assets/check.png"
                                alt="Check"
                                class="w-auto h-full"
                            />
                        {:else}
                            <enhanced:img
                                src="$lib/assets/x.png"
                                alt="X"
                                class="w-auto h-full"
                            />
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/snippet}

<main
    class="w-screen h-screen bg-linear-to-b from-blue-700 to-violet-800 flex flex-col justify-center items-center font-sans"
    bind:this={mainElement}
>
    {#if fullscreenEnabled}
        <button
            class="absolute bottom-2 right-2 hover:text-gray-600 z-2"
            onclick={toggleFullScreen}
        >
            {#if isFullScreen}
                <Shrink />
            {:else}
                <Expand />
            {/if}
        </button>
    {/if}
    <div class="w-7/8 h-full md:w-4/5 md:h-4/5">
        <Stepper />
        <div
            class="w-full h-13/16 portrait:h-7/8 bg-[url($lib/assets/card.png)] bg-cover bg-center rounded-2xl flex flex-col items-center p-4 md:p-8"
        >
            <h1
                class="p-1 md:p-5 portrait:mt-4 portrait:mb-4 bg-linear-to-r from-blue-700 to-violet-800 text-center rounded-sm text-white font-bold text-sm md:text-2xl tracking-wide shadow-lg mb-2 md:mb-8"
            >
                {stepData.title}
            </h1>
            <div
                class="w-full h-5/8 portrait:h-3/4 flex flex-col items-center justify-between"
            >
                {#if appState.step === 0}
                    <div class="text-left space-y-2">
                        <h2 class="text-sm md:text-lg font-bold">
                            {stepData.description}
                        </h2>
                        <h2 class="text-sm md:text-lg font-bold">
                            Vaša naloga je:
                        </h2>
                        <div
                            class="portrait:ml-4 md:ml-6 space-y-1 md:space-y-2 text-xs md:text-lg text-gray-700"
                        >
                            <p>
                                1. Opazovati simulacijo – spremljajte posnetke
                                ali animacije pri vsakem načinu plačila.
                            </p>
                            <p>
                                2. Analizirati prednosti in slabosti –
                                premislite, kaj je dobro in kje so tveganja.
                            </p>
                            <p>
                                3. Razmišljati o odločitvi – bi to plačilo
                                uporabili v resničnem življenju? Zakaj?
                            </p>
                            <p>
                                4. Sodelovati v razpravi – primerjajte opažanja
                                z drugimi udeleženci.
                            </p>
                        </div>
                        <p class="text-sm md:text-lg">
                            <span class="font-bold"> Cilj: </span>
                            <span>
                                Spoznati razlike med oblikami denarja, razumeti
                                njihove prednosti in omejitve ter razviti
                                kritično presojo pri izbiri načina plačila.
                            </span>
                        </p>
                    </div>
                {:else if appState.page === 0}
                    {#if stepData.image}
                        <div class="h-3/4">
                            <img
                                src={stepData.image}
                                alt={stepData.title}
                                class="w-auto h-full"
                            />
                        </div>
                    {/if}
                    <p
                        class="text-sm md:text-xl text-gray-600 text-center mx-auto"
                    >
                        {stepData.description}
                    </p>
                {:else}
                    <div class="w-full h-full space-y-8">
                        <div
                            class="flex flex-row portrait:flex-col justify-between gap-6"
                        >
                            {#if stepData.pros}
                                {@render prosConsList(
                                    "PREDNOSTI",
                                    stepData.pros,
                                    true,
                                )}
                            {/if}
                            {#if stepData.cons}
                                {@render prosConsList(
                                    "SLABOSTI",
                                    stepData.cons,
                                    false,
                                )}
                            {/if}
                        </div>
                    </div>
                {/if}
            </div>
        </div>
        <!-- Footer and Navigation Button  -->
        <div class="w-full relative bottom-4 flex justify-end">
            <button
                onclick={nextStep}
                class="bg-linear-to-r from-blue-700 to-violet-800 flex items-center space-x-1 py-2 px-2 rounded-tl-xl rounded-br-xl text-lg text-white shadow-xl transform transition duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
                <span>{isLastStep ? "Nazaj na začetek" : "Nadaljuj"}</span>
                <ArrowRight
                    size={18}
                    class="p-1 rounded-tl-sm rounded-br-sm bg-black"
                />
            </button>
        </div>
    </div>
</main>
