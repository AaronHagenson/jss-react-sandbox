// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the SiteFooter component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'SiteFooter',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'signUpHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'socialIconHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'supportText', type: CommonFieldTypes.SingleLineText },
      { name: 'supportPhone', type: CommonFieldTypes.SingleLineText },
      { name: 'copyrightText', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
    placeholders: ['footer-navigation-column'],
  });
}
