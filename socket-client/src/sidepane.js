import React, { Component } from 'react';
import Profile from './profile.js';
import Contact1 from './contact1.js';
// import Contact2 from './contact.js';
// import Contact3 from './contact.js';
// import Contact4 from './contact.js';

class SidePane extends Component {
  constructor(props){
    super(props);
    this.state={
      contactname: 'Harvey Specter'
    }
  }
  setName = (name) =>{
    console.log(name)
    this.setState({
      contactname: name
    });
    this.props.parentCallback(name);
  }
  render() {
    return (
    <div id="sidepanel">
        <Profile />
		<div id="contacts">
			<ul>
                <Contact1
                    parentCallback={this.setName}
                />
				<li class="contact active">
					<div class="wrap">
						<span class="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div class="meta">
							<p class="name">Harvey Specter</p>
							<p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li>
				<li class="contact">
					<div class="wrap">
						<span class="contact-status away"></span>
						<img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
						<div class="meta">
							<p class="name">Rachel Zane</p>
							<p class="preview">I was thinking that we could have chicken tonight, sounds good?</p>
						</div>
					</div>
				</li>
				<li class="contact">
					<div class="wrap">
						<span class="contact-status online"></span>
						<img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
						<div class="meta">
							<p class="name">Donna Paulsen</p>
							<p class="preview">Mike, I know everything! I'm Donna..</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		{/* <div id="bottom-bar">
			<button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
			<button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
		</div> */}
	</div>
    );
  }
}


export default SidePane;