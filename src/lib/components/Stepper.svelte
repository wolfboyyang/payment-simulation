<script lang="ts">
    import { Check } from "@lucide/svelte";
    import StepperItem from "./StepperItem.svelte";
    import { appState } from "$lib/app-state.svelte";
</script>

<div
    class="relative -top-8 w-full transform -translate-y-1/2 flex items-center justify-center"
>
    <!-- Initial Checkmark for Intro (Step 0) -->
    <div
        class="w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ease-in-out bg-gray-300 text-black"
    >
        <Check size={18} />
    </div>
    {#each [1, 2, 3, 4] as step, index}
        <!-- Connecting line -->
        <div
            class={`w-8 h-1 ${appState.step > index + 1 ? "bg-violet-700" : "bg-gray-300"}`}
        ></div>
        <StepperItem stepNumber={step} />
    {/each}
</div>
