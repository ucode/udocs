/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                height="58"
              />
            )}
          </a>
          <div>
            <h5>About Us</h5>
            <a href="https://ucode.com">
              UCode
            </a>
          </div>
        </section>

		<a href="https://www.algolia.com" className="fbOpenSource">
		<img src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.svg" width="150"/>
		</a>
      </footer>
    );
  }
}

module.exports = Footer;
