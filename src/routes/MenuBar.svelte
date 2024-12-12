<script>
  import MenuItem from "./MenuItem.svelte";
</script>

<div
  class="fixed inset-x-0 bottom-0 flex justify-items-stretch mx-auto w-full items-end bg-white"
>
  <MenuItem ref="/hjärtstopp" icon="i-mdi-heart" text="Hjärtstopp" />

  <MenuItem ref="/luftvägsstopp" icon="i-mdi-lungs" text="Luftvägsstopp" />

  <a class="btn btn-primary h-full my-1 mx-2 flex flex-col flex-grow" href="/">
    <span class="i-mdi-plus-thick text-neutral mt-1 text-5xl"></span>
    <p class="mb-1 text-neutral text-sm">Nödsituation</p>
  </a>

  <MenuItem ref="/hjärtstartare" icon="i-mdi-heart-flash" text="Hjärtstartare" />

  <MenuItem ref="/om" icon="i-mdi-information-outline" text="Om" />
</div>
