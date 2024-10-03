---
sidebar_position: 1
---

# Crear una página

Añade archivos **Markdown o React** a `src/pages` para crear una **página independiente**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Crea tu primera página React

Crea un archivo en `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>Mi página de React</h1>
      <p>Esto es una página de React</p>
    </Layout>
  );
}
```

Una nueva página esta disponible en [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Crea tu primera página Markdown

Crea un archivo en `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# Mi página Markdown

Esto es una página Markdown
```

Una nueva página esta disponible en [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
