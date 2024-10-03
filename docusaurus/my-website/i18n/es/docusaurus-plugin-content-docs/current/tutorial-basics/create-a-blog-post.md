---
sidebar_position: 3
---

# Crear un post de blog

Docusaurus crea una **página para cada entrada de blog**, pero también una **página de índice de blog\***, un sistema de **etiquetas**, un feed **RSS**...

## Crear tu primer Post

Crea un archivo en `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

¡Enhorabuena, has creado tu primer post!

Siéntete libre de jugar y editar este post tanto como quieras.
``

Una nueva entrada de blog está disponible en [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
```
