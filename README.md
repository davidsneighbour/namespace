# @dnb-org namespace

A collection of notes and lists about dnb-org modules and packages.

## DNB Quicklinks

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c297580-5145-4545-bc92-686ca6f78efb/deploy-status)](https://app.netlify.com/sites/dnbql/deploys)

A quick and dirty proof of concept of a "free" redirection service, hosted on Netlify.

- Step 1: add your redirects in `quicklinks/_redirects`. The accepted format is [documented at Netlify](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file). For more complicated cases add your rules to `netlify.toml`.
- Step 2: add this repository to your Netlify organisation and deploy. The `netlify.toml` defines the folder `quicklinks` to be deployed, no other action (like build) is needed.
- Step 3: add a custom domain or make your Netlify sub-domain look nice.

Use your redirects.

The installation for this repository is mapped to `dnbql.netlify.app`, so you can test it with adding any arbitrary redirection by adding the domain in front of the quicklink in `quicklinks/_redirects`.
