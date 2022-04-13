import React from 'react';
import FooterNavigationColumn from './FooterNavigationColumn';

import './SiteFooter.scss';

const navigationItems = [
  {
    link: 'www.google.com',
    columnHeading: 'Heading 1',
    children: [
      {
        link: 'www.google.com',
        title: 'Link 1',
      },
      {
        link: 'www.google.com',
        title: 'Link 2',
      },
      {
        link: 'www.google.com',
        title: 'Link 3',
      },
      {
        link: 'www.google.com',
        title: 'Link 4',
      },
      {
        link: 'www.google.com',
        title: 'Link 5',
      },
    ],
  },
  {
    link: 'www.google.com',
    columnHeading: 'Heading 2',
    children: [
      {
        link: 'www.google.com',
        title: 'Link 1',
      },
      {
        link: 'www.google.com',
        title: 'Link 2',
      },
      {
        link: 'www.google.com',
        title: 'Link 3',
      },
      {
        link: 'www.google.com',
        title: 'Link 4',
      },
      {
        link: 'www.google.com',
        title: 'Link 5',
      },
    ],
  },
  {
    link: 'www.google.com',
    columnHeading: 'Heading 3',
    children: [
      {
        link: 'www.google.com',
        title: 'Link 1',
      },
      {
        link: 'www.google.com',
        title: 'Link 2',
      },
      {
        link: 'www.google.com',
        title: 'Link 3',
      },
      {
        link: 'www.google.com',
        title: 'Link 4',
      },
      {
        link: 'www.google.com',
        title: 'Link 5',
      },
    ],
  },
  {
    link: 'www.google.com',
    columnHeading: 'Heading 4',
    children: [
      {
        link: 'www.google.com',
        title: 'Link 1',
      },
      {
        link: 'www.google.com',
        title: 'Link 2',
      },
      {
        link: 'www.google.com',
        title: 'Link 3',
      },
      {
        link: 'www.google.com',
        title: 'Link 4',
      },
      {
        link: 'www.google.com',
        title: 'Link 5',
      },
    ],
  },
];

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="logo-container">
      <div className="logo">Logo goes here</div>
    </div>

    <div className="footer-navigation-container">
      <FooterNavigationColumn columnItem={navigationItems[0]} />
      <FooterNavigationColumn columnItem={navigationItems[1]} />
      <FooterNavigationColumn columnItem={navigationItems[2]} />
      <FooterNavigationColumn columnItem={navigationItems[3]} />
    </div>

    <div className="contact-container">
      <div className="contact-heading subtitle_1">@Model.SignUpHeader</div>
      <div className="contact-flex-wrapper">
        {/* <div className="email-input">@Html.Sitecore().Placeholder("footer-email-signup")</div> */}
        <div className="email-input">email input placeholder</div>

        <div className="connect-support-wrapper">
          <div className="subtitle_1">@Model.SocialIconHeader</div>
          <div className="social-icons-container">
            {/* @Html.Sitecore().Placeholder("footer-social") */}
            social icons go here
          </div>
          <div className="customer-support body2">
            {/* <span>@Model.SupportText</span>{' '} */}
            <span>SupportText goes here</span>{' '}
            <span>
              <a href="tel:+@Model.SupportPhone">666-666-6666</a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-container overline">
      <div>copyright text goes here</div>
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
