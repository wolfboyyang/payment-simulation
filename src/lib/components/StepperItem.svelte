<script lang="ts">
    import { Check } from "@lucide/svelte";
    import { appState } from "$lib/app-state.svelte";
    let { stepNumber } = $props();
    const isCompleted = $derived(appState.step > stepNumber);
    const isActive = $derived(appState.step === stepNumber);

    const classes = $derived(
        `w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${isCompleted ? "bg-gray-300 text-black" : isActive ? "bg-linear-to-r from-blue-700 to-violet-800 text-white" : "bg-gray-300 text-black"}`,
    );
</script>

<div class={classes}>
    {#if isCompleted}
        <Check size={18} />
    {:else}
        {stepNumber}
    {/if}
</div>
