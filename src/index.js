import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SocialMediaIcon = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: props.iconColor,
        margin: '0 5px',
      }}
    >
      <i className={props.className} />
    </a>
  );
};

export default class SocialMediaIcons extends Component {
  render() {
    const icons = this.props.icons || [];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: this.props.iconSize || '2em',
        }}
      >
        {icons.map(icon => {
          return (
            <SocialMediaIcon
              className={`${this.props.classNamePrefix || 'fab'} ${
                icon.className
              }`}
              url={icon.url}
              iconColor={this.props.iconColor || 'blue'}
            />
          );
        })}
      </div>
    );
  }
}

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  classNamePrefix: PropTypes.string,
  iconSize: PropTypes.string,
};

SocialMediaIcon.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
};
