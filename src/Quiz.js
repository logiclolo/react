import React from 'react';
import ReactDOM from 'react-dom';
import index_icon1 from './icon/index_icon1.svg';
import index_icon2 from './icon/index_icon2.svg';
import index_icon3 from './icon/index_icon3.svg';
import emoji_correct from './icon/emoji_correct.svg';
import emoji_incorrect from './icon/emoji_incorrect.svg';
import result_1 from './img/result_1.jpg';
import result_2 from './img/result_2.jpg';
import result_3 from './img/result_3.jpg';
import result_4 from './img/result_4.jpg';
import loadScript from './helpers/load-script.js';
//import EnableHandler from './quiz.js';
import $ from 'jquery';

class LeftButtom extends React.Component {
	render() {
		return (
			<div className="butt butt_left" onClick={() => this.props.onClick(this.clicked, false)}
				ref={(thisClick) => {this.clicked = thisClick}}>
			<span>{this.props.name}</span>
		      </div>
		);
	}
}

class RightButtom extends React.Component {
	render() {
		return (
			<div className="butt butt_right" onClick={() => this.props.onClick(this.clicked, true)}
				ref={(thisClick) => {this.clicked = thisClick}}> 
			<span>{this.props.name}</span>
		      </div>
		);
	}
}

class Next extends React.Component {
	render() {
		return (
			<div className="next" onClick={() => this.props.onClick(this.clicked)}
				ref={(thisClick) => {this.clicked = thisClick}}> 
				<span>下一題</span>
			</div>
		);
	}
}

class Quiz extends React.Component {
	constructor() {
		super();
		this.state = {

			scroll_start: null,
			scroll_target: null,
			correct: {emoji_correct},
			incorrect: {emoji_incorrect},
			comment_text: [
				'回答正確！',
				'答錯也要挺住'
			],

			answers:  [
				'Pomegranate',
				'discovering',
				'Traveling',
				'labeled',
				'hat',
			],

			evaluation:  [
				'你的英文有很大的進步空間，從現在開始好好加油吧！',
				'你的英文有很大的進步空間，從現在開始好好加油吧！',
				'你的英文有很大的進步空間，從現在開始好好加油吧！',
				'再堅持一下，你的英文就會不一樣',
				'不錯，基本功還在!不過要讀懂英文文章，聽懂美劇，還要再加油！',
				'高手！直接去挑戰外教看看吧！',
			],

			background:  [
				{result_1}.result_1,
				{result_1}.result_1,
				{result_1}.result_1,
				{result_2}.result_2,
				{result_3}.result_3,
				{result_4}.result_4,
			],

			correct_count: 0,
			wrong_count: 0,
			bar_color: '#C8675A',
		};
	};

	get_div(obj) {

		while (obj != undefined)
		{
			let name = obj.attr('class')

			if (name != undefined && name.search(/sect/i) >= 0)
			{
				return obj 
			}

			obj = obj.parent();
		}

		return undefined;
	}

	get_div_index(obj){

		var div = this.get_div(obj);
		var match = div.attr('class').match(/sect(\d+)/)
		if (match != null)
		{
			index = match[1]
		}
		else
		{
			alert('End!!')	
		}
		var index = parseInt(index);

		return index;
	}

	switch_to_next_quiz_new(obj){
		var div;

		// show next quiz
		var cur = this.get_div(obj)
		var div = cur.next()
		if (div.attr('class') != 'result')
		{
			// get index of next quiz 
			var index = div.attr('class').match(/sect(\d+)/)[1]
			//index = parseInt(index);

			// show left bar
			//$('.nav li').css('background-color', '#ccc');
			$('.nav li').slice(index-1, index).css('background-color', this.state.bar_color);

			// scroll animation
			this.state.scroll_target = '.sect' + index; 
			this.state.scroll_start = '.sect' + this.get_div_index(obj);
			$(this.state.scroll_start).css('display', 'block');
			$(this.state.scroll_target).css('display', 'block');
			$('.butt').removeClass('disable');
			$(this.state.scroll_start).css('background-position','0 100%') // for parallax
			$('html, body').animate({
				scrollTop: $(this.state.scroll_target).offset().top
			}, 1000, function () {
				$('[class^="sect"]').css('display', 'none');
				div.css('display', 'block');
			});
		}
		else
		{
			this.show_final_result()	
		}
	}

	show_final_result(){

		$("[class^='sect']").css('display', 'none') 
		$('.nav').css('display', 'none')
		$('.result').css('display', 'block')
		var url = 'url(' + this.state.background[this.state.correct_count] + ') no-repeat'
		$('.result').css('background', url)
		$('.result').css('background-size', 'cover')
		$('.result h2').text(this.state.evaluation[this.state.correct_count])

	}

	butt_fade_out(obj){

		{
			obj = $(obj)
			obj.find('.butt').animate({
				opacity: 0
			}, 1000, function(){
				obj.find('.next').css('transform', 'translate3d(0px, -30%, 0px)') 
			})	
		}
	}

	is_correct(index, answer){

		if (answer == this.state.answers[index]) 
		{
			return true	
		}

		return false
	}

	show_answer(thisObj, obj, correct, other){
		if (correct)
		{
			obj.find('.comment p').text(this.state.comment_text[0]);
			//$(scroll_start).find('.comment img').attr('src', 'icon/emoji_correct.svg').fadeIn();
			$(this.state.scroll_start).find('.comment img').attr('src', this.state.correct.emoji_correct).fadeIn();
			thisObj.css('background-color', '#60a5a2')
			this.state.correct_count += 1
		}
		else
		{
			obj.find('.comment p').text(this.state.comment_text[1]);
			//$(scroll_start).find('.comment img').attr('src', 'icon/emoji_incorrect.svg').fadeIn();
			$(this.state.scroll_start).find('.comment img').attr('src', this.state.incorrect.emoji_incorrect).fadeIn();
			thisObj.css('background-color', '#9a1626')
			this.state.wrong_count += 1
		}
		$(this.state.scroll_start).find('.comment').addClass('nopadding');
		obj.find(other).css('background-color', 'transparent');
		obj.find('.answer').fadeIn();
		obj.find(other).addClass('disable'); // disable mouse event
		//obj.find('.next').css('display', 'block');
		var fadeout = () => {this.butt_fade_out(obj)}
		setTimeout(function(){
			obj.find('.next').fadeIn();
			fadeout();
		}, 1500)
	}

	componentDidMount() {
	
		//loadScript('./static/js/quiz.js');

		$('.nav li').slice(0, 1).css('background-color', this.state.bar_color);
	}

	handleClick(param, right) {
		var index = this.get_div_index($(param));
		var start = '.sect' + index;

		if(right) {
			var disable_butt = '.butt_left';	
		}
		else {
			var disable_butt = '.butt_right';	
		}

		this.setState(
			{
				scroll_start: start,
			},
			function() {
				var answer = $(param).find('span').text()
				this.show_answer($(param), $(start), this.is_correct(index-1, answer), disable_butt)
			}
		);

	}

	handleNextClick(param){
			this.switch_to_next_quiz_new($(param));
			$('.next').css('display', 'none');
	}

  render() {
    return (
      <div className="quiz-container">
        <div>
          <ul className="nav">
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className="sect0" ref={(thisFocus) => {this.focused = thisFocus}}>
          <div className="trunk">
            <div className="note">
              <div className="comment">
                <p>How good is your English?</p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
              <div className="intro intro1 col-sm-4">
                <img src={index_icon1} />
                <div>
                  <span className="desc">三分鐘</span>
                </div>
                <div>
                  <span>測出你的詞彙量</span>
                </div>
              </div>
              <div className="intro intro2 col-sm-4">
                <img src={index_icon2} />
                <div>
                  <span className="desc">獲得</span>
                </div>
                <div>
                  <span>VIPABC外教一對一課程</span>
                </div>
              </div>
              <div className="intro intro3 col-sm-4">
                <img src={index_icon3} />
                <div>
                  <span className="desc">抽獎</span>
                </div>
                <div>
                  <span>全部答對可參加抽獎</span>
                </div>
              </div>
              <div className="start next">
                <span>開始測驗</span>
              </div>
            </div>
          </div> { /* trunk */ }
        </div>
        { /*<div class="sect1 parallax">*/ }
        <div className="sect1">
          { /*<img src="pic/CIN_IngTech_0615_feature.jpg">*/ }
          <div className="trunk">
            <div className="note">
              { /*<div class="order">第一關</div>*/ }
              <div className="comment">
                <img src />
                <p>石榴的英文是?</p>
              </div>
              <div className="answer">
                <p>
                  Pomegranate
                </p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
	      <LeftButtom name={'Apple'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <RightButtom name={'Pomegranate'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <Next onClick={(click) => this.handleNextClick(click)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
            </div>
          </div> { /* trunk */ }
        </div> { /* sect01 */ }
        { /*<div class="sect2">*/ }
        { /*<div class="result">*/ }
        { /*<h1>測試結果</h1>*/ }
        { /*<h2>太強了!!!!!</h2>*/ }
        { /*</div>*/ }
        { /*</div>*/ }
        <div className="sect2">
          <div className="trunk">
            <div className="note">
              { /*<div class="order">第二關</div>*/ }
              <div className="comment">
                <img src />
                <p>
                  Marine biologists are constantly ____ new species of both plant and animal life on the seabed.
                </p>
              </div>
              <div className="answer">
                <p>
                  Marine biologists are constantly <span className="heighlight">discovering</span> new species of both plant and animal life on the seabed.
                </p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
	      <LeftButtom name={'discovering'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <RightButtom name={'discover'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <Next onClick={(click) => this.handleNextClick(click)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
            </div>
          </div> { /* trunk */ }
        </div> { /* sect02 */ }
        <div className="sect3">
          <div className="trunk">
            <div className="note">
              { /*<div class="order">第三關</div>*/ }
              <div className="comment">
                <img src />
                <p>
                  ____ alone can be an really exciting experience. 
                </p>
              </div>
              <div className="answer">
                <p>
                  <span className="heighlight">Traveling</span> alone can be an really exciting experience. 
                </p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
	      <LeftButtom name={'Traveling'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <RightButtom name={'Traveled'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <Next onClick={(click) => this.handleNextClick(click)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
            </div>
          </div> { /* trunk */ }
        </div> { /* sect02 */ }
        <div className="sect4">
          <div className="trunk">
            <div className="note">
              { /*<div class="order">第四關</div>*/ }
              <div className="comment">
                <img src />
                <p>
                  The word 'tip' probably originated in 18th-century England, where coffee- house tables were equipped with coin boxes ____ “To Insure Promptness”.
                </p>
              </div>
              <div className="answer">
                <p>
                  The word 'tip' probably originated in 18th-century England, where coffee- house tables were equipped with coin boxes <span className="heighlight">labeled</span> “To Insure Promptness”.
                </p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
	      <LeftButtom name={'labeled'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <RightButtom name={'labeling'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <Next onClick={(click) => this.handleNextClick(click)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
            </div>
          </div> { /* trunk */ }
        </div> 
        <div className="sect5">
          <div className="trunk">
            <div className="note">
              { /*<div class="order">最終關</div>*/ }
              <div className="comment">
                <img src />
                <p>
                  To raise more funds for the orphanage, they held auctions and tried passing the ____
                </p>
              </div>
              <div className="answer">
                <p>
                  To raise more funds for the orphanage, they held auctions and tried passing the <span className="heighlight">hat</span> 
                </p>
              </div>
            </div> { /* note */ }
            <div className="clicks">
	      <LeftButtom name={'buck'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <RightButtom name={'hat'} onClick={(click, param) => this.handleClick(click, param)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
	      <Next onClick={(click) => this.handleNextClick(click)} 
			ref={(thisFocus) => {this.focused = thisFocus}} />
            </div>
          </div> { /* trunk */ }
        </div> 
        <div className="result">
	<div className="trunk">
          <div className="end">
            <h1>測試結果</h1>
            <h2 />
          </div>
	  </div>
        </div>
      </div>
      );
  }
}

export default Quiz;
