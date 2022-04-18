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
  // const { footerNavLinksList } = props.fields;
  const { footerNavLinksList } = props.hello[0].fields;

  // debugger;

  // TEST
  // const shouldRenderLink = !!footerNavLinksList[0]?.fields?.internalLink?.value?.text;

  // return (
  //   <div>
  //     <button>Click me!</button>
  //   </div>
  // );

  const handleClick = () => props.handleClick();

  return (
    <div className="navigation-container-desktop">
      <div className="links-column">
        {/* <span className="links-heading subtitle_1">{getFieldValue(props.fields, 'heading')}</span> */}

        <div>
          <button onClick={handleClick}>Click me!</button>
        </div>

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
