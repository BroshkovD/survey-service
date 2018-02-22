import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

  state = {
    showReview: false
  };

  onToggleForm = () => this.setState({ showReview: !this.state.showReview });

  renderContent() {
    if(this.state.showReview) {
      return <SurveyFormReview
        onCancel={this.onToggleForm}
      />;
    }

    return <SurveyForm onSurveySubmit={this.onToggleForm} />;
  }

  render() {

    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);