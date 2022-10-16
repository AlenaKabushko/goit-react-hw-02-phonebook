import { Component } from 'react';
import { Form } from './Form/Form';

// import { nanoid } from 'nanoid';
//model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [],
  };

  formData = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form formData={this.formData} />
      </>
    );
  }
}
