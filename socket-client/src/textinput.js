import React, {Component} from 'react'

class TextInput extends Component{
  addMsg = e => {
        e.preventDefault();
        const newMsg = this.refs.InputItem.value;
        if(newMsg.length === 0) return
        this.props.updateMsg(newMsg);
        e.target.reset();
  }    
  render() {
    return(
      <div class="message-input">
        <div class="wrap">
        <form onSubmit={(e) => this.addMsg(e)}>
        <input ref="InputItem" type="text" placeholder="Write your message..." />
        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
        <button class="submit" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
        </div>
      </div>
    );
  }
}


export default TextInput;