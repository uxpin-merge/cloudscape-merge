import React from 'react';
import BadgeBase, { BadgeProps } from '@cloudscape-design/components/badge';
/**
 * @uxpindocurl https://cloudscape.design/components/badge/
 * @uxpindescription A small, color-coded visual element that contains letters or numbers, that is used to label, categorize, organize, or indicate severity of items.
 */
const Badge = (props: BadgeProps) => {
  return <BadgeBase {...props} />;
};

export default Badge;
