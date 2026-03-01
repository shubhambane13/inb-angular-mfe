import { initFederation } from '@angular-architects/native-federation';

initFederation('manifests/protected-federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
