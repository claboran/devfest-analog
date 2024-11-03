---
layout: 1-2-page
---

# BFF in Analog

Was sind Backend-For-Frontends?

<div class="text-sm">

* Jedes Frontend muss sich um die Verwaltung der Zugriffe auf die verschiedenen APIs kümmern.
* Daten müssen im jeweiligen Frontend aufbereitet werden.
* Je nach Art müssen Daten von verschiedenen APIs zusammengeführt werden.
* Authentifizierung und Tokenhaltung muss im Frontend geschehen.

</div>

<template v-slot:right>

<div class="h-full p-8 flex flex-col">

### Klassischer Ansatz einer komplexen Anwendungsarchitektur

<div class="flex-1 flex justify-center items-center">

<div class="flex items-center gap-64">

<div class="flex flex-col gap-4">


<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative"> 
<div class="absolute -z-1 -right-82 bg-accent-3 h-0.5 w-82 rotate-36 transform-origin-cl"></div>
<div class="absolute -z-1 -right-78 bg-accent-3 h-0.5 w-78 -rotate-24 transform-origin-cl"></div>
<div class="absolute -z-1 -right-70 bg-accent-3 h-0.5 w-70 -rotate-8 transform-origin-cl"></div>
<div class="absolute -z-1 -right-75 bg-accent-3 h-0.5 w-75 rotate-8 transform-origin-cl"></div>
<div class="absolute -z-1 -right-75 bg-accent-3 h-0.5 w-75 rotate-23  transform-origin-cl"></div>
Mobile App</div>
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative">

<div class="absolute -z-1 -right-82 bg-accent-2 h-0.5 w-82 -rotate-36 transform-origin-cl"></div>
<div class="absolute -z-1 -right-78 bg-accent-2 h-0.5 w-78 rotate-24 transform-origin-cl"></div>
<div class="absolute -z-1 -right-70 bg-accent-2 h-0.5 w-70 rotate-8 transform-origin-cl"></div>

<div class="absolute -z-1 -right-75 bg-accent-2 h-0.5 w-75 -rotate-8 transform-origin-cl"></div>
<div class="absolute -z-1 -right-75 bg-accent-2 h-0.5 w-75 -rotate-23  transform-origin-cl"></div>
Web-Frontend</div>
</div>



<div class="flex flex-col gap-4">
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative"> 
API Service 1</div>
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative  transform-origin-cr">
API Service 2</div>
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative">
API Service 3</div>
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative">
API Service 4</div>
<div class="p-4 flex items-center justify-center text-white bg-accent-4 relative">
API Service 5</div>
</div>


</div>
</div>


</div>


</template>
