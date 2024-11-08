---
layout: 1-2-page

inverted: "false"

---

# File-based Routing

In a Nutshell

<template v-slot:right>


<div class="p-8 pb-0 flex flex-col gap-4">

<div class="flex flex-col">
  
  ### Gemeinsame Basis

  Unter `/src/app/pages` liegen alle Routen einer Anwendung

</div>

<div class="flex flex-col">

### Routenübersicht

``` {all|3-4|3-4,15|5|10-11|7-9|6-7,13-14|18}

src/
├── app/
│   ├── pages/
│   │   ├── (home).page.ts             // Route: '/'
│   │   ├── about.page.ts              // Route: '/about'
│   │   ├── (auth).page.ts             // Layout für '/login' und '/signup'
│   │   ├── (auth)/
│   │   │   ├── login.page.ts          // Route: '/login'
│   │   │   └── signup.page.ts         // Route: '/signup'
│   │   ├── users/
│   │   │   └── [userId].page.ts       // Route: '/users/[userId]'
│   │   ├── groups.[groupId].page.ts   // Route: '/groups/[groupId]'
│   │   ├── products.page.ts           // Layout für '/products'
│   │   ├── products/
│   │   │   ├── (product-list).page.ts // Route: '/products'
│   │   │   └── [productId].page.ts    // Route: '/products/[productId]'
│   │   │
│   │   ├── [...not-found].md          // Route: '/**' ->'/not-found'


```



</div>

</div>

</template>

<!-- 

Eine der spannendsten Features von Analog ist das File-based Routing. Lassen Sie uns anschauen, wie das funktioniert.

Die grundlegende Idee ist sehr einfach: Alle Routen Ihrer Anwendung befinden sich im Verzeichnis /src/app/pages. Die Dateisystemstruktur bestimmt dabei automatisch die URL-Struktur Ihrer Anwendung.

Schauen wir uns ein paar konkrete Beispiele an:

Eine Datei (home).page.ts wird automatisch zur Root-Route '/'. Die Klammern zeigen hier an, dass es sich um eine Index-Route handelt.

Für statische Routen wie 'about.page.ts' wird automatisch die Route '/about' generiert - der Dateiname wird direkt zur URL.
Besonders interessant wird es bei dynamischen Routen: Eine Datei wie [userId].page.ts im users-Verzeichnis erzeugt eine dynamische Route '/users/[userId]', wo der Parameter zur Laufzeit gefüllt wird.

Für komplexere Strukturen können wir Layouts verwenden. Zum Beispiel haben wir hier eine Auth-Gruppe mit Login und Signup, die ein gemeinsames Layout teilen.

Auch Catch-all Routes sind möglich: Die Datei [...not-found].md fängt alle nicht definierten URLs ab und leitet sie auf eine 404-Seite um.

Was besonders praktisch ist: Die Struktur ist selbsterklärend. Wenn Sie die Ordnerstruktur sehen, wissen Sie sofort, welche Routes Ihre Anwendung hat. Das macht das Routing sehr übersichtlich und wartbar.

-->
