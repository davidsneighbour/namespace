---
title: Authors
---

The old implementation of `author` and `authors` in GoHugo was deprecated in [0.98.0 🕊️](https://github.com/gohugoio/hugo/releases/tag/v0.98.0) and [0.120.0 🪦](https://github.com/gohugoio/hugo/releases/tag/v0.120.0). The implementation described *here* is an individual config and frontmatter setup and not part of GoHugo internals.

GoHugo's deprecation message currently states:

> `.Site.Author` is deprecated. Use taxonomies instead.

This solution offers three ways to add author information and fall back gracefully to a site wide author.

The author is the person who wrote the content. The `author` object is used to define the author of the content. The `authors` object is used to define more than one single author connected to the content. `authors` overrides `author` if both are defined.

## Site wide authors

Add one or multiple authors within the `params` section of your sitewide configuration in `config/_defaults/params.yaml`.

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

## Authors via front matter

Add the same information via front matter on a per-page-base. If you have sitewide author(s) defined then this frontmatter will override (not merge) that information when it is set on a page base. Leave it out of the front matter and the site wide author information will be used.

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

## Adding authors via taxonomy

GoHugo's suggestion to replace `site.Author(s)` is to implement an author taxonomy. This makes only sense though, if you have multiple authors. To add one singular author just use the global author setup via `params`.

Once the taxonomy is set up the author(s) can be assigned via one of the following frontmatter setups:

```yaml
---
author: patrick-kollitsch
authors:
  - patrick-kollitsch
  - another-author
---
```

With the information for authors set up in `content/authors/authorslug/_index.md`.

### Step 1: Setup author taxonomy

tbd...

### Step 2: Add author informationtb

tbd ...

## Layouts (accessing the author information)

The following layouts are samples to show how to access to the aforementioned author setups. It uses the information in the following order:

* author as defined via taxonomy
* author as defined via frontmatter (`authors` overrides `author`)
* author as defined via site configuration in `params` (`authors` overrides `author`)

### Accessing the frontmatter

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

These values are then available in `page.Params.authors` (or `.Params.authors`) and `page.Params.author` (or `.Params.author`) respective.

## Schema (recommendation)

This is a recommendation and not a standard. The fields named here are available and used in all David's Neighbour's modules/themes/sites, so code samples are consistent.

* `name` (required, string): The name of the author (could be a slug when used with taxonomies).
* `label` (optional, string): The name of the author (printable).
* `homepage` (optional, URL): The URL of the author's homepage.
* `image` (optional, string): The path to the author's image. The image should be in the `static` or `assets` folder.
* `email` (optional, email): The authors email address. Keep privacy in mind.

```yaml
title: authors setup

definitions:
  authorObject:
    type: object
    required:
      - name
    properties:
      name:
        type: string
      label:
        type: string
      homepage:
        type: string
        format: uri
      image:
        type: string
      email:
        type: string
        format: email

properties:
  authors:
    type: array
    items:
      $ref: '#/definitions/authorObject'
  author:
    $ref: '#/definitions/authorObject'

allOf:
  - oneOf:
      - required: ["author"]
      - required: ["authors"]
```
