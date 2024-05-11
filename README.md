# Pactima Node.js Library

The Pactima Node library provides convenient access to the Pactima API from
applications written in server-side JavaScript / TypeScript.


## Documentation

See the [Pactima's Developer docs](https://developers.pactima.com/) for the API reference, guides and examples.


## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install @pactima/node
```

## Usage

The package needs to be configured with your authentication token which can be an oAuth access token or your team's API key.
Require it with the key's value:

<!-- prettier-ignore -->
```js
const { PactimaApi } = require('@pactima/node');

const pactimaApi = new PactimaApi('pctm_sk_live_...');

pactimaApi.eSignaturePackages.list({ limit: 10 })
    .then((res: any) => console.log(res.data))
    .catch((err: any) => console.error(err));
```

Or using ES modules and `async`/`await`:

```js
import { PactimaApi } from '@pactima/node';

const pactimaApi = new PactimaApi('pctm_sk_live_...');

const res = await pactimaApi.eSignaturePackages.list({ limit: 10 });

console.log(res.data);
```

## Support

New features and bug fixes are released on the latest major version of the `@pactima/node` package. If you are on an older major version, we recommend that you upgrade to the latest in order to use the new features and bug fixes including those for security vulnerabilities. Older major versions of the package will continue to be available for use, but will not be receiving any updates.