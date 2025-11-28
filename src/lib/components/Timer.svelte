<script lang="ts">
    import { nextStep, THINK_TIME } from "$lib/app-state.svelte";
    import { onMount, onDestroy } from "svelte";
    let end = 0;
    let now = THINK_TIME;
    let timer = 0;
    let count = $state(THINK_TIME / 1000);

    onMount(() => {
        now = Date.now();
        end = now + THINK_TIME;
        timer = setInterval(() => {
            now = Date.now();
            const remainingTime = (end - now) / 1000;
            if (remainingTime <= 0) {
                clearInterval(timer);
                timer = 0;
                count = 0;
                nextStep();
            } else {
                count = remainingTime;
            }
        }, 1000);
    });

    onDestroy(() => {
        if (timer) {
            clearInterval(timer);
            timer = 0;
        }
    });
</script>

<div
    class="absolute top-4 right-4 md:top-8 md:right-8 p-2 px-4 rounded-sm bg-linear-to-r from-blue-700 to-violet-800 text-white font-mono text-sm shadow-lg"
>
    {Math.floor(count / 60)
        .toFixed(0)
        .padStart(2, "0")}:{(count % 60).toFixed(0).padStart(2, "0")}
</div>
