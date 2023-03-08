import React from 'react';
import PropTypes from 'prop-types';
import { ButtonFbWrapper, ButtonFb } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonFbWrapper>
      {options.map((name, index) => {
        const upperName = name.charAt(0).toUpperCase() + name.slice(1);
        return (
          <ButtonFb
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(name)}
          >
            {upperName}
          </ButtonFb>
        );
      })}
    </ButtonFbWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
