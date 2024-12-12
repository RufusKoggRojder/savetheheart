<script>
  export let ref;
  export let icon;
  export let text;
  export let color;
</script>

<a class={`btn btn-${color} my-1 mt-4 mx-auto w-3/4 h-fit flex flex-col content-center`} href={ref}>
  <span class={`${icon} text-neutral text-5xl mt-4`}></span>
  <p class="my-1 text-neutral leading-none text-3xl mb-4">
    {text}
  </p> 
</a>