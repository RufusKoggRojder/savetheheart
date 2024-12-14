<script>
  import { page } from "$app/stores";
  let path = $page.url.pathname;

  export let ref;
  export let icon;
  export let text;
  console.log("Path: " + path);
  console.log("Ref: " + ref);

  $: textColor = ref === path ? "text-primary" : "text-secondary";
</script>

<a
  class="btn btn-neutral h-full my-1 mx-1 w-14 flex flex-col content-center"
  href={ref}
>
  <span class={`${icon} ${textColor} mt-1 text-2xl`}></span>
  <h1 class={`mb-1 ${textColor} text-xs`}>
    {text}
  </h1>
</a>
