import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isClicked: true,
      title: '',
      url: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }
    this.props.addResource(this.props.index, newResource);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul>
          {
            this.props.items.resources.map((resource) => {
              if (this.state.isClicked) {
                return(
                  <li>
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                )
              }
            })
          }
        </ul>
        <form>
          <label htmlFor="title">Title</label>
          <input name="title" id="title" onChange={this.handleTyping} value={this.state.title}/>
          <br/>
          <label htmlFor="url">URL</label>
          <input name="url" id="url" onChange={this.handleTyping} value={this.state.url}/>
          <br/>
          <button onClick={this.handleSubmit}>Add Resource</button>
        </form>
      </div>
    )
  }

}
