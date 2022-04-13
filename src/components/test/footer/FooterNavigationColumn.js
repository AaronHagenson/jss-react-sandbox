import React, { useState } from 'react';

const FooterNavigationColumn = ({ columnItem }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navigation-container-desktop">
      <div className="links-column">
        {columnItem.link ? (
          <a href={columnItem.link} className={'links-heading-hover subtitle_1'}>
            {columnItem.columnHeading}
          </a>
        ) : (
          <span className="links-heading subtitle_1">{columnItem.columnHeading}</span>
        )}
        {columnItem.children.map((childLink, index) => (
          <p className="body2" key={index}>
            {
              <a href={childLink.link ?? '#'} className={'subnav-links'}>
                {childLink.title}
              </a>
            }
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterNavigationColumn;
