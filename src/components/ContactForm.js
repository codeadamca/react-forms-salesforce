import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
      
      super(props);

      this.state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        company: '',
        "00N4x00000ZT6K8": '',
        "00N4x00000ZT0OJ": ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleInputChange(event) {
      
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });

    }

    handleSubmit( event ) {

      
      console.log(this.state);

      fetch("http://localhost:8888/proxy.php",{
        method: 'post',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      })
      // .then(res => res.json())
      .then(
        (result) => { 
          
          console.log('SUCCESS');
          console.log(result);

          /*
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: 'Message has been emailed!'
          });
          */

        },
        (error) => {
          
          console.log('ERROR');
          console.log(error);
          
        }
      );
      
      event.preventDefault();

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="first_name">
            First Name:
          </label>
          <input id="first_name" 
            maxLength="40" 
            name="first_name" 
            size="20" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />

          <label htmlFor="last_name">Last Name:</label>
          <input id="last_name" 
            maxLength="80" 
            name="last_name" 
            size="20" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />

          <label htmlFor="phone">Phone:</label>
          <input id="phone" 
            maxLength="40" 
            name="phone" 
            size="20" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />

          <label htmlFor="email">Email:</label>
          <input id="email" 
            maxLength="80" 
            name="email" 
            size="20" type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />

          <label htmlFor="company">Company:</label>
          <input id="company" 
            maxLength="40" 
            name="company" 
            size="20" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />

          <label htmlFor="00N4x00000ZT6K8">Subject:</label>
          <textarea id="00N4x00000ZT6K8" 
            name="00N4x00000ZT6K8" 
            rows="3" 
            type="text" 
            wrap="soft"
            value={this.state.name}
            onChange={this.handleInputChange} ></textarea>
          <br />

          <label htmlFor="00N4x00000ZT0OJ">Message:</label>
          <textarea id="00N4x00000ZT0OJ" 
            name="00N4x00000ZT0OJ" 
            rows="3" 
            type="text" 
            wrap="soft"
            value={this.state.name}
            onChange={this.handleInputChange} ></textarea>
          <br />

          <input 
            type="submit"
            value="Submit" />
        </form>
      );
    }
  }

export default ContactForm;
