<script>
  import MenuBar from "./MenuBar.svelte";
  import TitleBar from "./TitleBar.svelte";

</script>

<div class="mx-auto content-center flex flex-col bg-accent h-svh">
  <TitleBar text="Vad har hänt?" />
  
  <a class="btn btn-primary my-2 mt-4 mx-auto w-3/4 h-fit flex flex-col content-center" href="/hjärtstopp">
    <span class="i-mdi-heart text-neutral text-5xl mt-4"></span>
    <p class="my-1 text-neutral text-3xl mb-4">
      Hjärtstopp
    </p> 
  </a>

  <a class="btn btn-primary my-1 mx-auto w-3/4 h-fit flex flex-col content-center" href="/luftvägsstopp">
    <span class="i-mdi-lungs text-neutral text-5xl mt-4"></span>
    <p class="my-1 text-neutral text-3xl mb-4">
      Luftvägsstopp
    </p> 
  </a>

  <a class="btn bg-[#379e37] my-1 mx-auto w-3/4 h-fit flex flex-col content-center" href="/hjärtstartare">
    <span class="i-mdi-heart-flash text-neutral text-5xl mt-4"></span>
    <p class="my-1 text-neutral text-3xl mb-4 leading-none">
      Hjärtstartare
    </p> 
  </a>

</div>

<MenuBar></MenuBar>
