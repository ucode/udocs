/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'UCode',
    image: 'img/U_609x582.png',
    infoLink: 'https://ucode.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'UDocs' /* title for your website */,
  tagline: 'Web development documentation for kids & adults',
  url: 'https://udocs.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'udocs',
  headerLinks: [
    {doc: 'intro_html', label: 'HTML'},
    {doc: 'intro_css', label: 'CSS'},
    {doc: 'intro_js', label: 'JavaScript'},
    //{doc: 'doc4', label: 'API'},
    //{page: 'help', label: 'Help'},
    //{blog: true, label: 'Blog'},
	{search: true},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/U_609x582.png',
  footerIcon: 'img/U_609x582.png',
  favicon: 'img/favicon/U_609x609.png',
  /* colors for website */
  colors: {
    primaryColor: '#7c8eab',
    secondaryColor: '#546277',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' UCode, Inc.',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/ucode/udocs',
  algolia: {
    apiKey:
      "95efd4c826ff3541b671413a01a2c2df",
    indexName: "udocs"
  },
  gaTrackingId: 'UA-118253391-1',
};

module.exports = siteConfig;
