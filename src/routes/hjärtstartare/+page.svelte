<script>
  import MenuBar from "../MenuBar.svelte";
  import Signifier from "../Signifier.svelte";
  import TitleBar from "../TitleBar.svelte";
</script>

<TitleBar text="Vad har hänt?" />
<div class="w-full content-center flex flex-col bg-accent h-full snap-none">

  <p class="my-3 mx-2">
    Hjärtstartare är en maskin som läser av hjärtrytmen och som kan ge en
    strömstöt om det behövs.
  </p>
  <p class="my-3 mx-2">
    En strömstöt från en hjärtstartare kan återge hjärtat pumpförmåga vid ett
    plötsligt hjärtstopp.
  </p>
  <p class="my-3 mx-2">
    I Sveriges Hjärtstartarregister kan du söka efter eller registrera en publik
    hjärtstartare.
  </p>

  <Signifier
    color="success"
    ref="/karta"
    icon="i-mdi-heart-flash"
    text="Hitta hjärtstartare"
  />

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci consequatur mollitia quis iusto deserunt voluptatibus numquam suscipit nihil unde, neque consequuntur laborum voluptates expedita magni reiciendis! Autem, in beatae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci consequatur mollitia quis iusto deserunt voluptatibus numquam suscipit nihil unde, neque consequuntur laborum voluptates expedita magni reiciendis! Autem, in beatae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci consequatur mollitia quis iusto deserunt voluptatibus numquam suscipit nihil unde, neque consequuntur laborum voluptates expedita magni reiciendis! Autem, in beatae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci consequatur mollitia quis iusto deserunt voluptatibus numquam suscipit nihil unde, neque consequuntur laborum voluptates expedita magni reiciendis! Autem, in beatae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci consequatur mollitia quis iusto deserunt voluptatibus numquam suscipit nihil unde, neque consequuntur laborum voluptates expedita magni reiciendis! Autem, in beatae!
  </p>

</div>

<MenuBar />
