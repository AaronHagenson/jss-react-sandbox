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

        {/* {props.fields.footerNavLinksList.map((navLink, index) => (
          <p className="body2" key={index}>
            {
              <a href={getFieldValue(navLink.fields, 'url') ?? '#'} className={'subnav-links'}>
                {getFieldValue(navLink.fields, 'label')}
              </a>
            }
          </p>
        ))} */}
        {footerNavLinksList.map((navLink, index) => (
          <p className="body2" key={index}>
            {
              // <a href={getFieldValue(navLink.fields, 'url') ?? '#'} className={'subnav-links'}>
              //   {getFieldValue(navLink.fields, 'label')}
              // </a>
              <a href={navLink.fields.url.value ?? '#'} className={'subnav-links'}>
                {navLink.fields.label.value}
              </a>
              // <Link field={navLink.fields.label} />
            }
          </p>
        ))}
      </div>
    </div>
  );

  // return <div>Hello world</div>;
};

export default FooterNavigationColumn;
