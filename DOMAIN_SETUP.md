# DOMAIN_SETUP.md

## Current Published URL

The site is currently published through GitHub Pages repository deploy:

```text
https://pavelgalkin1985-dot.github.io/yegine-unanyan-landing/
```

Current Vite base path:

```text
VITE_BASE_PATH=/yegine-unanyan-landing/
```

This must stay unchanged while the site is served from the GitHub Pages repository URL.

## Custom Domain TODO

The client has purchased a domain, but the exact domain name is not confirmed in the project yet.

Do not add a `CNAME` file and do not switch production to root deploy until the exact domain is confirmed.

After the domain is confirmed:

1. Change the production build base path to:

   ```text
   VITE_BASE_PATH=/
   ```

2. Add the custom domain in GitHub Pages settings or through the GitHub API.

3. Add a `CNAME` file to the published artifact with the exact domain name.

4. Update canonical and Open Graph URLs in `index.html`.

5. Update any README/project memory references that still point to the repository URL as canonical.

6. Configure DNS at the registrar.

## DNS Notes

For a `www` domain, for example:

```text
www.example.ru
```

usually create a CNAME record pointing to:

```text
pavelgalkin1985-dot.github.io
```

For an apex/root domain, for example:

```text
example.ru
```

use the registrar's supported A, ALIAS, or ANAME records according to GitHub Pages and registrar rules.

After DNS is active:

1. Check GitHub Pages custom domain verification.
2. Enable or verify HTTPS.
3. Test both HTTP and HTTPS redirects.
4. Re-run browser checks on desktop and mobile.

