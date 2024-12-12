<script>
    import MenuBar from "../MenuBar.svelte";
    import TitleBar from "../TitleBar.svelte";
  </script>
  
  <div class="content-center flex flex-col bg-accent fixed w-full h-svh">
    <TitleBar class="grow-0" text="Hitta Hjärtstartare" />
  
    <iframe
    class="mx-auto  aspect-square w-full "
    title="Hitta Hjärtstartare"
    src="https://www.hjartstartarregistret.se/#/"
    frameborder="0"
    allow="geolocation 'self' http://192.168.68.127:5173/"
    ></iframe>
    
    <h1 class="text-center ">
      Använd kartan för att hitta närmaste hjärtstartare.
    </h1>
  </div>
  <MenuBar/>
  