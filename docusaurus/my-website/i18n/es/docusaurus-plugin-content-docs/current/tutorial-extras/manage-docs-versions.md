---
sidebar_position: 1
---

# Administrar las versiones de tus Documentos

Docusaurus puede manejar múltiples versiones de tus documentos.

## Crear versiones de documentos

Publicar la versión 1.0 de tu proyecto:

```bash
npm run docusaurus docs:version 1.0
```

Copia la carpeta `docs` en `versioned_docs/version-1.0` y se crea el archivo versions.json.

Tus documentos ahora tienen 2 versiones:

- `1.0` en `http://localhost:3000/docs/` para los documentos con versión 1.0.
- `current` en `http://localhost:3000/docs/next/` para los **próximos documentos no publicados**

## Añade un despegable de versiones

Para navegar sin problemas entre las versiones, agrega un menú desplegable de la versión.

Modificar el archivo `docusaurus.config.js':

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

El despegable de versiones aparece en tu barra de navegación:
![Despegable de versiones](./img/docsVersionDropdown.png)

## Actualiza una versión existente

Es posible editar documentos versionados en sus respectivas carpetas:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
