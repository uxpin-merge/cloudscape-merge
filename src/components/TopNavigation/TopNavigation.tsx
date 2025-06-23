import React from 'react';
import TopNavigationBase, { TopNavigationProps } from '@cloudscape-design/components/top-navigation';
import { useRef, useEffect } from 'react';
/**
* @uxpindocurl https://cloudscape.design/components/top-navigation/
* @uxpindescription A global navigation element for services that is consistent and persists across all service pages.
*/
const TopNavigation = (props: TopNavigationProps) => {
  const anchor = useRef(null); // initial value is null
  //@ts-ignore
  const style = props.style || null;

  useEffect(() => {
    if (anchor.current) {
     const component = (anchor.current as HTMLElement).previousElementSibling;
     if (component) {
       const header = component.querySelector('header');
       if (header) {
         header.removeAttribute("style");
         if (style) {
           Object.keys(style).forEach((property) => {
             // @ts-ignore
             if (property.indexOf('--') === 0) {
                header.style.setProperty(
                 '--color-background-container-content-z79u4u',
                  style[property]
               );
             } else {
               header.style[property] = style[property];
             }
           });
         }
       }
     }
    }
  }, [style]);

  return (<>
    <TopNavigationBase {...props} />
    <span ref={anchor} />
  </>)
};

export default TopNavigation;
