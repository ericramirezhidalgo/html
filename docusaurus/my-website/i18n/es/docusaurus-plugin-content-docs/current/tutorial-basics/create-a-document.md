---
sidebar_position: 2
---

# Crear un Documento

Los Documentos son **grupos de páginas** conectados a través de:

- un **sidebar**
- **previous/next navigation**
- **control de versiones**

## Crear tu primer Documento

Crea un archivo Markdown en `docs/hello.md`:

```md title="docs/hello.md"
# Hola

¡Este es mi **primer Documento de Docusaurus!**
```

Un nuevo documento esta disponible en [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configura el Sidebar

Docusaurus automáticamente **crea un sidebar** desde la carpeta `docs`.

Añade metadatos para personalizar la etiqueta y posición de la barra lateral:

```md title="docs/hello.md" {1-4}
---
sidebar_label: "¡Hola!"
sidebar_position: 3
---

# Hola

¡Este es mi **primer documento de Docusaurus**!
```

También es posible crear tu sidebar de forma explícita en `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    "intro",
    // highlight-next-line
    "hello",
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial-basics/create-a-document"],
    },
  ],
};
```
