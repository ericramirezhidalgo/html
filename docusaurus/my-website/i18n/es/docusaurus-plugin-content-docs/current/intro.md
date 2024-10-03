---
sidebar_position: 1
---

# Tutorial de introducción

Descubramos **Docusaurus en menos de 5 minutos**.

## Empezemos

Comienza **creando un nuevo sitio**.

O **prueba Docusaurus inmediatamente** con **[docusaurus.new](https://docusaurus.new)**.

### Lo que necesitarás

- [Node.js](https://nodejs.org/en/download/) versión 18.0 o superior:
  - Al instalar Node.js, se recomienda marcar todas las casillas relacionadas con dependencias.

## Generar un nuevo sitio

Genera un nuevo sitio usando la **plantilla clásica**.

La plantilla clásica se añadirá automáticamente a tu proyecto después de ejecutar el comando.

```bash
npm init docusaurus@latest my-website classic
```

Puedes escribir este comando en Command Prompt, Powershell, Terminal o cualquier otro terminal integrado de tu editor de código

El comando también instala todas las dependencias necesarias para ejecutar Docusaurus.

## Inicia tu sitio

Ejecuta el servidor de desarrollo:

```bash
cd my-website
npm run start
```

El comando`cd`cambia el directorio con el que estás trabajando. Para trabajar con tu nuevo sitio Docusaurus, necesitarás navegar el terminal allí.

El comando `npm run start` construye tu sitio web localmente y lo sirve a través de un servidor de desarrollo, listo para que lo veas en http://localhost:3000/.

Abre `docs/intro.md` (esta página) y edita algunas líneas: el sitio se **recarga automáticamente** y muestra tus cambios.
