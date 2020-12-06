# dnb-hugo-namespace

A collection of DNB configuration parameters. This repository will have no value to anything other than people who add features to dnb-hugo projects. Hugo overrides data files from different projects that reside in the same named folder, so this list keeps an eye on them. 

Project settings: `data/dnb/NAMESPACENAME/configuration.toml` is expected, additional files might occur if the project documents their names. Everything below `data/dnb/NAMESPACE/` has to reside in the same module and data mount.

Configurations are then accessible via `site.Data.dnb.NAMESPACENAME.configuration`.

## Used Namespaces

| Repository | Namespace | Notes | Datafile | Used |
|:--- |:--- |:--- |:--- |
| [garuda](https://github.com/dnb-hugo/garuda) | garuda | DNB Hugo Garuda theme | `dnb/garuda/configuration.toml` | [x] |
| | | | | |
| [components/favicon](https://github.com/dnb-hugo/components/tree/main/favicon) | favicon | DNB Favicon | `dnb/favicon/configuration.toml` | [ ] |
| [components/humans.txt](https://github.com/dnb-hugo/components/tree/main/humans.txt) | humans | DNB Humans.txt | `dnb/humans-txt/configuration.toml` | [ ] |
| [components/netlification](https://github.com/dnb-hugo/components/tree/main/netlification) | netlification | DNB Netlification | `dnb/netlification/configuration.toml` | [ ] |
| [components/opensearch](https://github.com/dnb-hugo/components/tree/main/opensearch) | opensearch | DNB Opensearch | `dnb/opensearch/configuration.toml` | [ ] |
| [components/renderhooks](https://github.com/dnb-hugo/components/tree/main/renderhooks) | renderhooks | DNB Renderhooks | `dnb/renderhooks/configuration.toml` | [ ] |
| [components/robots](https://github.com/dnb-hugo/components/tree/main/robots) | robots | DNB Robots | `dnb/robots/configuration.toml` | [ ] |
| [components/sitemap](https://github.com/dnb-hugo/components/tree/main/sitemap) | sitemap | DNB Sitemap | `dnb/sitemap/configuration.toml` | [ ] |
| | | | | |
| [functions](https://github.com/dnb-hugo/functions) | functions | DNB Functions | `dnb/functions/configuration.toml` | [ ] |
| | | | | |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | shortcodes | DNB Shortcodes | `dnb/shortcodes/configuration.toml` | [ ] |
| [shortcodes/youtube]() | shortcodes-youtube | youtube shortcode | `dnb/shortcodes-youtube/configuration.toml` | [ ] |

### Note

- The components namespaces probably need some reworking done to be renamed `components-netlification` and such. 
- The single shortcodes namespace makes no sense if other shortcodes will use their own namespace.
- Garuda's namespace is fixed.
