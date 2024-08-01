import React, { useState } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function App() {
  const [isRTL, setIsRTL] = useState(false);

  // Create a cache with RTL or LTR support
  const cacheRtl = createCache({
    key: isRTL ? 'muirtl' : 'muiltr',
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [prefixer],
  });

  const handleToggleDirection = () => {
    setIsRTL(!isRTL);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <div>
        <br />
        <button onClick={handleToggleDirection}>Toggle Direction</button>
        <br />
        <br />
        <Autocomplete
          options={['Option 1', 'Option 2', 'Option 3']}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose an option"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          )}
        />
      </div>
    </CacheProvider>
  );
}
