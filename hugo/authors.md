## Authors

The author is the person who wrote the content. The `author` object is used to define the author of the content. The `authors` object is used to define more than one single author connected to the content. `authors` overrides `author` if both are defined.

```yaml
---
author:
  name: Patrick Kollitsch
  homepage: https://kollitsch.dev/
  image: /images/patrick-kollitsch.jpg

authors:
  - name: Patrick Kollitsch
    homepage: https://kollitsch.dev/
    image: /images/patrick-kollitsch.jpg
  - name: Another Author
    homepage: https://example.com/
    image: /images/another-aythor.jpg
---
```

### Accessing the frontmatter

The old implementation of `author` and `authors` in GoHugo was deprecated in [0.98.0](https://github.com/gohugoio/hugo/releases/tag/v0.98.0) and [0.120.0](https://github.com/gohugoio/hugo/releases/tag/v0.120.0). The implementation described *here* is an individual frontmatter setup and not part of GoHugo.

This leads to the following setup in the frontmatter of a content file:

```go
{{ with .Params.authors }}
  {{ range . }}
    {{ .name }}
    {{ .homepage }}
    {{ .image }}
  {{ end }}
{{ else }}
  {{ with .Params.author }}
    {{ .name }}
    {{ .homepage }}
    {{ .image }}
  {{ end }}
{{ end }}
```

These values are also available in `page.Params.authors` and `page.Params.author` respective.

### Available fields

This is a recommendation and not a standard. The fields named here are available in all David's Neighbour's modules/themes/sites, so code samples are consistent.

* `name` (required, string): The name of the author.
* `homepage` (optional, string): The URL of the author's homepage.
* `image` (optional, string): The path to the author's image. The image should be in the `static` folder.

### Schema

```yaml
title: authors setup

properties:
  authors:
    type: array
    items:
      type: object
      required:
        - name
      properties:
        name:
          type: string
        homepage:
          type: string
        image:
          type: string
  author:
    type: object
    required:
      - name
    properties:
      name:
        type: string
      homepage:
        type: string
      image:
        type: string
```
