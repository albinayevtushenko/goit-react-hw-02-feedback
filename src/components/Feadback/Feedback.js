import { FeedbackOptions } from './FeedbackOptions';
import PropTypes from 'prop-types';

export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
