import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";
import {primaryOptions, secondaryOptions, yearOptions} from '../api/options';

class FormExampleSubcomponentControl extends Component {
  state = {
    primarySelection: 'getConsumptions',
    secondarySelection: '',
    yearSelection: ''
  }
  // state = { Primary: options, Secondary: '', Year: ''};

  handlePrimaryChange = (e, {value}) => {
    this.setState({ 
      primarySelection: value,
      secondarySelection: '',
      yearSelection: ''
    });
  }

  handleSecondaryChange = (e, {value}) => {
    this.setState({
      secondarySelection: value
    });
  }

  handleYearChange = (e, {value}) => {
    this.setState({
      yearSelection: value
    });
  }

  render() {
    const { primarySelection, yearSelection, secondarySelection } = this.state;
    return (
      <>
      <Header as='h3' dividing>
        Filter
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            selection
            onChange={this.handlePrimaryChange}
            label="Primary"
            options={primaryOptions}
            value={primarySelection}
          />
          <Form.Select
            fluid
            search
            selection
            label="Secondary"
            options={secondaryOptions[primarySelection]}
            value={secondarySelection}
            onChange={this.handleSecondaryChange}
            placeholder="Select"
          />
          <Form.Select
            fluid
            search
            selection
            label="Year"
            options={yearOptions[primarySelection]}
            value={yearSelection}
            onChange={this.handleYearChange}
            placeholder="Select"
          />
          <Form.Button style={{marginTop: "23px"}} onClick={()=>{
            this.props.onSearch([this.state.primarySelection, this.state.secondarySelection, this.state.yearSelection]);
          }}>Go!</Form.Button>
        </Form.Group>
      </Form>
      </>
    );
  }
}

export default FormExampleSubcomponentControl;
