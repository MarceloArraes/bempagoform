import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default createEmotionCache;