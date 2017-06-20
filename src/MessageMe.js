import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MessageMe.css';
import $ from 'jquery';

class Question extends Component {

	render() {

		return (
			<div className="message-me-ques">
				<a className="typewrite" data-type={this.props.text}>
				</a>
			</div>
		)
	}

}

class Selection extends Component {

	render() {
		return (
			<span name={this.props.index} ref={(thisSelect)=>{this.select=thisSelect}}
					onClick={() => this.props.onSelect(this.select)}>
				{this.props.select}
			</span>
		)
	}
}

class MyEmail extends Component {

	render() {

		return (
			<div>
			<div className="message-me-email">
				<span>
					Here is my Email:
				</span>
				<input type="text" ref={(thisInput)=>{this.input=thisInput}}>
				</input>
				<a href='#' onClick={() => this.props.onSend(this.input)}>
				>
				</a>
			</div>
			<div className="message-me-email message-me-final">
				<span>
					Thank you !	
				</span>
			</div>
			</div>
		)
	}

}

class Answer extends Component {

	constructor() {
		super();
		this.state = {
			autofocus: false,
		};
	}

	componentDidUpdate(){
		/*
		if (this.input != null)
			this.input.focus();
		*/
		/*
		if (this.props.autofocus && !this.state.autofocus && window.innerWidth <= 768){
			this.setState({autofocus: true}, function(){
				this.input.value = 'Type here ~'
			})
		}
		*/
	}

	componentDidMount() {
		//this.input.value = 'logic'
	}

	render() {
		const group = this.props.text.map((select, index) => {
			return (
					<Selection index={index} select={select} onSelect={(param) => this.props.onSelect(param)} />
			);
		});
		const reply = (param, onClick) => { 
			if (param[0].length > 1) {
				return (
					<div>
					<input type="text" ref={(thisInput)=>{this.input=thisInput}}>
					</input>
					<a href='#' onClick={() => onClick(this.input)}>
					>
					</a>
					<div className="message-me-select">
						{group}
					</div>
					</div>
				);
			
			}
			else {
				return (
					<div>
						<MyEmail onSend={(param) => this.props.onSend(param)}/>
					</div>
				);
			}
		}

		return (
			<div className="message-me-ans">
					{/*
					<input type="text" ref={(thisInput)=>{this.input=thisInput}}>
					</input>
					<a href='#' onClick={() => this.props.onClick(this.input)}>
					>
					</a>
					*/}
					{reply(this.props.text, ()=>this.props.onClick())}
				<div/>
			</div>
		)
	}

}

class MessageMe extends Component {

	constructor() {
		super();
		this.state = {
			isSelected: false,
			num: 0,
			text: '',
			idx: '',
			ans: [
				["Just a passerby", "A friend", "Your future employer"],	
				["let's make friend!", "You just got an interview"],	
				[""],	
				[""],	
			],
			ques: [
				"Hi, I'm Walo. And you are ...?",
				"Hello %s! How can I help?",
				"Thanks, How can I contact you?",
				"Great, I'll get back to you ASAP!",
			],
			table: [
				{},
				{'0': 'stranger', '1': 'my friend', '2': 'boss'},
				{'0': 'stranger', '1': 'my friend', '2': 'boss'},
				{'0': 'stranger', '1': 'my friend', '2': 'boss'},
			],
			name: '',
			problem: '',
			email: '',
			isTypeWriterDone: false,
		};
	
	}

	txtTyper(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.isDeleting = false;
		this.tick = () => {
			var i = this.loopNum % this.toRotate.length;
			//var fullTxt = this.toRotate[i];
			var fullTxt = this.toRotate;

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			var that = this;
			//var delta = 200 - Math.random() * 100;
			var delta = 50;

			if (this.isDeleting) { delta /= 2; }

			if (this.txt != fullTxt) {
				setTimeout(function() {
					that.tick();
				}, delta);
			}
			else {
				this.setState({isTypeWriterDone: true})	
				$("input[type='text']").focus();
			}
		}
		/*
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
		*/

		this.tick();
	}

	setupHandler() {
		this.typewrite();

		$(".message-me-ans a").css('visibility', 'hidden'); 
		$(".message-me-email a").css('visibility', 'hidden'); 

		var disSelect = () => {
					this.setState({
						isSelected: false,
					},
						function() {
						}	
					);
				}

		//$("input[type='text']").focus();
		$("input[type='text']").on("keyup", function(){
			if(this.value!=""){
				$(".message-me-ans a").css('visibility', 'visible'); 
				$(".message-me-email a").css('visibility', 'visible'); 
				disSelect();
			}
			else {
				$(".message-me-ans a").css('visibility', 'hidden'); 
				$(".message-me-email a").css('visibility', 'hidden'); 
			}
		});
	}

	componentDidMount() {
		this.setupHandler();
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);

	}

	composePostData(data) {
		var num = this.state.num;

		if (num==1) {
			this.setState({name: data});	
		}
		else if (num==2) {
			this.setState({problem: data});	
		}
		else if (num==3) {
			this.setState({email: data},
				function (){
					this.sendEmail();	
				}
			);	
		}
	}

	composeNewQues() {
		const ques = this.state.ques;
		const num = this.state.num;
		var sub = '';
		if (this.state.isSelected) {
			sub = this.state.table[this.state.num][this.state.idx]; 
			this.composePostData(this.state.ans[this.state.num-1][parseInt(this.state.idx)]);
		}
		else {
			sub = $("input[type='text']").val();
			this.composePostData(sub);
		}
		ques[num] = ques[num].replace('%s', sub);
		this.setState({
			ques: ques,
			},
			function() {
				this.setupHandler();
			}	
		);
	}

	handleSelect(param) {
		this.setState({
			isSelected: true,
			idx: param.getAttribute('name'),
		},
			function() {
				$(".message-me-ans a").css('visibility', 'visible'); 
				$(".message-me-email a").css('visibility', 'visible'); 
				$("input[type='text']").val(param.textContent)
			}	
		);
	}

	handleClick() {
		this.setState({
			num:  this.state.num + 1,
		},
			function() {
				this.composeNewQues();
				$("input[type='text']").val('')
			}	
		);
	}

	validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

	onSend(param) {
		$('.message-me-email').slideUp();
		$('.message-me-final').slideDown();

		this.setState({
			num:  this.state.num + 1,
		},
			function() {
				var email = param.value;
				if (!this.validateEmail(email)){
					alert('Wrong e-amil format!');
					return
				}

				this.composePostData(email);
				//this.sendEmail(email);	
			}	
		);
	}

	sendEmail() {

		$.ajax({
			type: 'POST',
			url: '/sendemail',
			data: { name: this.state.name, problem: this.state.problem, email: this.state.email }
			})
			.done((data) => {
			//this.actions.addCharacterSuccess(data.message);
			})
			.fail((jqXhr) => {
			//this.actions.addCharacterFail(jqXhr.responseJSON.message);
		});

		{/*
		fetch('/contactus', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			      email: email,
			      name: 'walo',
			      age: 12,
			      // then continue this with the other inputs, such as email body, etc.
			})
		})
		.then(function(response){
			//response.json()
			console.log(response);
		})
		//.then((responseJson) => {
			//console.log(responseJson);
		//})
		.catch((error) => {console.error(error);})
			
		this.setState({
			num:  this.state.num + 1,
		},
			function() {
				this.composeNewQues();
				$("input[type='text']").val('')
			}	
		);
		*/}
	}

	typewrite() {

		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
		    var toRotate = elements[i].getAttribute('data-type');
		    var period = elements[i].getAttribute('data-period');
		    if (toRotate) {
		      //new TxtType(elements[i], JSON.parse(toRotate), period);
		      //new this.txtTyper(elements[i], toRotate, period);
		      this.txtTyper(elements[i], toRotate, period);
		    }
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
		document.body.appendChild(css);
	}

	render() {

		return( 
			<div className="message-me">
				<Question text={this.state.ques[this.state.num]} />
				<Answer onClick={()=>this.handleClick()} onSelect={(param)=>this.handleSelect(param)} 
				        onSend={(param)=>this.onSend(param)} text={this.state.ans[this.state.num]} 
					autofocus={this.state.isTypeWriterDone}/>
			</div>
		)	
	}

} 

export default MessageMe;
