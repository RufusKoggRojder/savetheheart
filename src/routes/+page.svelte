<script>
  import MenuBar from "./MenuBar.svelte";
  import Signifier from "./Signifier.svelte";
  import TitleBar from "./TitleBar.svelte";
</script>

<div class="fixed w-full content-center flex flex-col bg-accent h-svh">
  <TitleBar text="Vad har hänt?" />

  <Signifier
    color="primary"
    ref="/hjartstopp"
    icon="i-mdi-heart"
    text="Hjärtstopp"
  />

  <Signifier
    color="primary"
    ref="/luftvagsstopp"
    icon="i-mdi-lungs"
    text="Luftvägsstopp"
  />

  <Signifier
    color="success"
    ref="/hjartstartare"
    icon="i-mdi-heart-flash"
    text="Hjärtstartare"
  />
</div>

<MenuBar></MenuBar>
