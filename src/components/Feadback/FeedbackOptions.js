import PropTypes from 'prop-types';
import { Btn, Wrapper } from 'components/Button.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Btn type="button" onClick={() => onLeaveFeedback('good')}>
        Good 😍
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral 😐
      </Btn>
      <Btn type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad 😤
      </Btn>
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
