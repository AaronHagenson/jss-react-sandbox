import React from 'react';
import { Text, getFieldValue, Placeholder } from '@sitecore-jss/sitecore-jss-react';

// const SiteFooter = (props) => (
//   <div>
//     <p>SiteFooter Component</p>
//     <Text field={props.fields.heading} />
//   </div>
// );

// export default SiteFooter;

const SiteFooter = (props) => (
  <footer className="site-footer">
    <div className="logo-container">
      <div className="logo">Logo goes here</div>
    </div>

    <div className="footer-navigation-container">
      {/* <FooterNavigationColumn columnItem={navigationItems[0]} />
      <FooterNavigationColumn columnItem={navigationItems[1]} />
      <FooterNavigationColumn columnItem={navigationItems[2]} />
      <FooterNavigationColumn columnItem={navigationItems[3]} /> */}
      <Placeholder name={'footer-navigation-column-1'} rendering={props.rendering} />
      <Placeholder name={'footer-navigation-column-2'} rendering={props.rendering} />
      <Placeholder name={'footer-navigation-column-3'} rendering={props.rendering} />
      <Placeholder name={'footer-navigation-column-4'} rendering={props.rendering} />
    </div>

    <div className="contact-container">
      <div className="contact-heading subtitle_1">
        {getFieldValue(props.fields, 'signUpHeader')}
      </div>
      <div className="contact-flex-wrapper">
        <div className="email-input">@Html.Sitecore().Placeholder(footer-email-signup)</div>

        <div className="connect-support-wrapper">
          <div className="subtitle_1">{getFieldValue(props.fields, 'socialIconHeader')}</div>
          <div className="social-icons-container">@Html.Sitecore().Placeholder(footer-social)</div>
          <div className="customer-support body2">
            <span>{getFieldValue(props.fields, 'supportText')}</span>{' '}
            <span>
              <a href="tel:+@Model.SupportPhone">{getFieldValue(props.fields, 'supportPhone')}</a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-container overline">
      <div>{getFieldValue(props.fields, 'copyrightText')}</div>
      <div>
        <button
          id="ot-sdk-btn"
          type="button"
          className="ot-sdk-show-settings"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          role="button"
        >
          Do Not Sell My Personal Information
        </button>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
