import React, { Component } from 'react'

class Contact1 extends Component {

  constructor(props){
      super(props);
      this.state = {
        name:'Louis Litt',
        class:"contact",
        toggled: 0
      }
    }
    setToggled = e => {
      this.setState( {toggled: this.state.toggled === 1? 0 : 1}, () => {
        var toggled = this.state.toggled;
        var name = this.state.name;
        if(toggled === 0) {
          this.setState({
            class:"contact active",
          });
        }
        else {
          this.setState({
            class:"contact",
          });
        }
        this.props.parentCallback(name);
      });
    console.log(this.state)
    }      
  render() {
    return(
    <li class={this.state.class} onClick={this.setToggled}>
      <span>
      <div class="wrap">
          <span class="contact-status online"></span>
          <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
          <div class="meta">
              <p class="name">{this.state.name}</p>
              <p class="preview">You just got LITT up, Mike.</p>
          </div>
      </div>
      </span>
    </li>
    )
  }
}


export default Contact1
