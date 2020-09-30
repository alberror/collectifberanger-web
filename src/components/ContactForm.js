import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mnqongvb"
        method="POST"
      >
        <div className="form-group">
          <label>Votre email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Votre message</label>
          <textarea type="text" name="message" />
        </div>
        <div className="form-group">
          {status === "SUCCESS" ? (
            <p className="notice">Merci pour votre message !</p>
          ) : (
            <button>Envoyer</button>
          )}
          {status === "ERROR" && (
            <p className="error">Oups, une erreur s'est produite...</p>
          )}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
