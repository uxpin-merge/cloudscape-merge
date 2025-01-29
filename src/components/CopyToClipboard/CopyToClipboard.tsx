import React from 'react';
import CopyToClipboardBase, { CopyToClipboardProps } from '@cloudscape-design/components/copy-to-clipboard';

const CopyToClipboard = (props: CopyToClipboardProps) => {
  return <div><CopyToClipboardBase {...props} /></div>;
};

export default CopyToClipboard;
