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
			<span name={this.props.index+1} ref={(thisSelect)=>{this.select=thisSelect}}
					onClick={() => this.props.onSelect(this.select)}>
				{this.props.select}
			</span>
		)
	}
}

class MyEmail extends Component {

	render() {

		return (
			<div className="message-me-email">
				<span>
					Here is my Email:
				</span>
				<input type="text" ref={(thisInput)=>{this.input=thisInput}}>
				</input>
			</div>
		)
	}

}

class Answer extends Component {

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
					<div className="message-me-email">
						<MyEmail/>
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

const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
};

TxtType.prototype.tick = function() {
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
};

class MessageMe extends Component {

	constructor() {
		super();
		this.state = {
			isSelected: false,
			num: 0,
			text: '',
			idx: '',
			ans: [
				["just a passerby", "a friend", "your future employer"],	
				["let's make friend!", "I want to offer you an interview opportunity"],	
				[""],	
			],
			ques: [
				"Hi, I'm Walo. And you are ...?",
				"Hello %s! How can I help?",
				"Thanks, How can I contack you?",
				"Great, I'll get back to you ASAP!",
			],
			table: [
				{},
				{'1': 'stranger', '2': 'my friend', '3': 'boss'},
				{'1': 'stranger', '2': 'my friend', '3': 'boss'},
			],
					
		};
	
	}

	componentDidMount() {
		this.typewrite()

		var disSelect = () => {
					this.setState({
						isSelected: false,
					},
						function() {
						}	
					);
				}

		$("input[type='text']").focus();
		$("input[type='text']").on("keyup", function(){
			if(this.value!=""){
				$(".message-me-ans a").css('display', 'inline-block'); 
				disSelect();
			}
			else {
				$(".message-me-ans a").css('display', 'none'); 
			}
		});
	}

	change() {
	
	}

	composeNewQues() {
		const ques = this.state.ques;
		const num = this.state.num;
		if (this.state.isSelected) {
			const sub = this.state.table[this.state.num][this.state.idx]; 
			ques[num] = ques[num].replace('%s', sub);
		
		}
		else {
			const sub = $("input[type='text']").val();
			ques[num] = ques[num].replace('%s', sub);
		}
		this.setState({
			ques: ques,
		},
			function() {
				this.typewrite();
			}	
		);
	}

	handleSelect(param) {
		this.setState({
			isSelected: true,
			idx: param.getAttribute('name'),
		},
			function() {
				$(".message-me-ans a").css('display', 'inline-block'); 
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

	typewrite() {

		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
		    var toRotate = elements[i].getAttribute('data-type');
		    var period = elements[i].getAttribute('data-period');
		    if (toRotate) {
		      //new TxtType(elements[i], JSON.parse(toRotate), period);
		      new TxtType(elements[i], toRotate, period);
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
				<Answer onClick={()=>this.handleClick()} onSelect={(param)=>this.handleSelect(param)} text={this.state.ans[this.state.num]} />
			</div>
		)	
	}

} 

export default MessageMe;
