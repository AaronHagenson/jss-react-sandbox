import React, { useState } from 'react';
import { Text, getFieldValue, Link } from '@sitecore-jss/sitecore-jss-react';

// const FooterNavigationColumn = (props) => (
//   <div>
//     <p>FooterNavigationColumn Component</p>
//     <Text field={props.fields.heading} />
//   </div>
// );

// export default FooterNavigationColumn;

const FooterNavigationColumn = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const { footerNavLinksList } = props.fields;

  // TEST
  const shouldRenderLink = !!footerNavLinksList[0]?.fields?.internalLink?.value?.text;

  //   return (
  //     <div className="navigation-container-desktop">
  //       <div className="links-column">
  //         {columnItem.link ? (
  //           <a href={columnItem.link} className={'links-heading-hover subtitle_1'}>
  //             {columnItem.columnHeading}
  //           </a>
  //         ) : (
  //           <span className="links-heading subtitle_1">{columnItem.columnHeading}</span>
  //         )}
  //         {columnItem.children.map((childLink, index) => (
  //           <p className="body2" key={index}>
  //             {
  //               <a href={childLink.link ?? '#'} className={'subnav-links'}>
  //                 {childLink.title}
  //               </a>
  //             }
  //           </p>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="navigation-container-desktop">
      <div className="links-column">
        {/* {columnItem.link ? (
            <a href={columnItem.link} className={'links-heading-hover subtitle_1'}>
              {columnItem.columnHeading}
            </a>
          ) : (
            <span className="links-heading subtitle_1">{columnItem.columnHeading}</span>
          )} */}
        <span className="links-heading subtitle_1">{getFieldValue(props.fields, 'heading')}</span>

        {footerNavLinksList.map((navLink, index) => {
          const hasHref = !!navLink?.fields?.internalLink?.value?.href;

          return (
            <p className="body2" key={index}>
              {hasHref ? (
                <Link field={navLink.fields.internalLink} className={'subnav-links'} />
              ) : (
                // This doesn't actually render anything. If there is no href added to the link
                // field, the "fields" object is empty. It seems that in order to use a GeneralLink
                // type it is required to add the href. Maybe this won't be the case in connected mode.
                // It's possible that it's a quirk of the .yml files.
                <a href="#" className={'subnav-links'}>
                  {navLink?.fields?.internalLink?.value?.text}
                </a>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNavigationColumn;
