# CURSO DE FRONTEND DEVELOPER

[timeLine]: ./img/timeLine.png "Linea de tiempo tecnologías"
[textos]: ./img/textos.png "textos"
[sonidos]: ./img/sonidos.png "sonidos"
[imagenes]: ./img/imagenes.png "imagenes"
[timBernersLee]: ./img/timBernersLee.png "timBernersLee"
[http]: ./img/http.png "protocolo http"
[http-vista]: ./img/http-vista.png "http en el navegador"
[url]: ./img/url.png "url"
[url-vista]: ./img/url-vista.png "url en el navegador"
[html]: ./img/html.png "url en el navegador"
[html-vista]: ./img/html-vista.png "url en el navegador"
[primeraPagina]: ./img/primeraPagina.png "primera página"
[css-vista-1]: ./img/css-vista-1.png "Vista CSS 1"
[css-vista-2]: ./img/css-vista-2.png "Vista CSS 2"
[css_html]: ./img/css_html.png "Vista CSS y HTML"
[DOM_CSSOM_RENDERTREE]: ./img/DOM_CSSOM_RENDERTREE.png "DOM CSSOM RENDER TREE"
[css_tips]: ./img/css_tips.webp "Tips CSS"

![Imagen][timeLine]

__Internet__ nació en 1983, y es la combinación de dos palabras:

1. Interconnected
2. Network

Es una red inmensa de computadoras, conectadas entre sí, al rededor del mundo. Nos permite compartir información unos con otros:

<center>

![Imagen][textos] ![Imagen][sonidos] ![Imagen][imagenes]

![Imagen][timBernersLee]

</center>


Tim Berners-Lee, inventor de la World Wide Web, formó el consorcio W3C, para estandarizar y supervisar el desarrollo de las tecnologías en base a internet: __HTTP__, __URL__, __HTML__.

![Imagen][http] ![Imagen][http-vista]

![Imagen][url] ![Imagen][url-vista]

![Imagen][html] ![Imagen][html-vista]

Con estas Tres tecnologías, se creó la primera pagina Web: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html

<center>

![Imagen][primeraPagina]

</center>

Por eso, surgió la necesidad la aparencia de los sitios Web, naciendo en 1994 el primer borrador del __CSS__ (Cascade Style Sheets).

__CSS__ son unas series de reglas que describen la aparencia de una página web, incluido los colores, la tipografía, el margen y el tamaño de los elementos, inclusive adaptanto la página web a pantallas grandes o pequeñas, esto es conocido como __Responsive Design__.

<center>

![Imagen][css-vista-1]

![Imagen][css-vista-2]

</center>

El navegador se encarga de tomar estos estilos y agregarlos a cada elemento que nosotros tengamos en nuestro HTML.

<center>

![Imagen][css_html]

</center>

---

### HTML

Es un lenguaje de marcado, usado para decirle a tu navegador cómo estructurar las páginas que visitas.

### CSS

Es un lenguaje que permite crear páginas web con un diseño agradable a los usuarios.

1. [HTML Reference](https://htmlreference.io/)
2. [CSS reference](https://cssreference.io/)

---

### DOM, CSSOM, Render Tree y proceso de renderizado de la web

<center>

![Imagen][DOM_CSSOM_RENDERTREE]

</center>

* __DOM:__ Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.

* __CSSOM:__ así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.

* __Render Tree:__ es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

1. Procesa el HTML para construir el DOM.
2. Procesa el CSS para construir el CSSOM.
3. El DOM se une con el CSSOM para crear el Render Tree.
4. Se aplican los estilos CSS en el Render Tree.
5. Se __pintan__ los nodos en la pantalla para que los usuarios vean el contenido de la página web.

<center>

![Imagen][css_tips]

</center>

---

### Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos

Nuestros elementos HTML se componen de:

* __Etiqueta de apertura:__ el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
* __Contenido:__ dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como __anidamiento__.
* __Etiqueta de cierre:__ son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: `</h1>`.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: __\<etiqueta atributo="valor del atributo">__. Por ejemplo: `<h1 class="saludo">`.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: `<img src="puppy.png" alt="mi mascota">`.

---


