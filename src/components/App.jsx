import React from 'react';
import { Feedback } from './Feadback/Feedback';
import { Section } from './Feadback/Section';
import { Statistics } from './Feadback/Statistics/Statistics';
import { Container } from './Container.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = options => {
    this.setState(prevState => {
      const value = prevState[options];
      return {
        [options]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number((good * 100) / total).toFixed(0) : '';
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
          />
        </Section>
      </Container>
    );
  }
}
export default App;
