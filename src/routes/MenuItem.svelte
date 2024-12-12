<script>
  export let ref;
  export let icon;
  export let text;
</script>

<a
  class="btn btn-neutral h-full my-1 mx-1 w-14 flex flex-col content-center"
  href={ref}
>
  <span class={`${icon} text-secondary mt-1 text-2xl`}></span>
  <h1 class="mb-1 text-secondary text-xs">
    {text}
  </h1>
</a>
