---
sidebar_position: 2
---

# Traduce tu sitio

Vamos a traducir `docs/intro.md` al Frances.

## Configura i18n

Modifica `docusaurus.config.js` para añadir soporte para `fr` local:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## Traduce un documento

Copia el archivo `docs/intro.md` en la carpeta `i18n/fr`

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduce `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` al francés.

## Iniciar tu sitio traducido

Inicia tu sitio en francés:

```bash
npm run start -- --locale fr
```

Tu sitio traducido es accesible en [http://localhost:3000/fr/](http://localhost:3000/fr/) y la página de Primeros pasos está traducida.

:::caution
En desarrollo, solo puedes usar una traducción al mismo tiempo

:::

## Añade un despegable de idiomas

Para navegar sin problemas entre idiomas, agregue un desplegable de idioma.

Modifica el archvio`docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

El despegable de idiomas ahora aparece en tu barra de navegación:
The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Construye tu sitio traducido

Construye tu sitio para un idioma específico:

```bash
npm run build -- --locale fr
```

O construye tu sitio para incluir todas las traducciones a la vez:

```bash
npm run build
```
