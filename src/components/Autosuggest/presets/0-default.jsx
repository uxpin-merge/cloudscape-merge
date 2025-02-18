import * as React from 'react';
import Autosuggest from '../Autosuggest';

export default (
  <Autosuggest
    options={[
      { value: 'Suggestion 1' },
      { value: 'Suggestion 2' },
      { value: 'Suggestion 3' },
      { value: 'Suggestion 4' },
    ]}
    ariaLabel="Autosuggest example with suggestions"
    placeholder="Enter value"
    empty="No matches found"
    uxpId="auto-suggest-1"
  />
);
