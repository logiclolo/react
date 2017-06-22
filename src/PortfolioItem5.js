import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PortfolioItemPool.css';
import Header from './Header';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link
} from 'react-router-dom';
import Navigation from './Navigation';
import Characterize from './characterize';

import mainpic from './img/w5pic_1.jpg';



class PortfolioItemPool5 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = '信任和安全對於移動支付決策的影響'
		const sub_headline = 'UX Research' 
		const main_pic = {mainpic} 
		var preface = ""

		/********
		 contents has the following keys:
		 1. title
		 2. desc
		 3. subtitle
		 4. subdesc 
		 5. pic
		 ********/
		var contents = [
			{
				title: '摘要',
				desc: "為了瞭解“信任”和“安全”對於用戶使用移動支付的影響，我們採用實驗方法，建立了知名度(信任)、支付額度(安全)和補償度(安全)這三個因子，對於用戶感知信任、感知安全以及使用意願的影響模型。研究結果顯示，感知信任和感知安全會影響使用意願，並且感知安全會影響感知信任。而這三個因子中，知名度透過感知安全影響影響使用意願；補償度會影響用戶感知安全，並且也會影響感知信任，但不會直接影響使用意願。支付額度雖然對用戶沒有直接影響，但是支付額度與知名度以及支付額度與補償度的交互作用會對用戶的感知信任、感知安全和使用意願產生影響。",	
				subdesc:'Considering that trust and safety issues influence users’ mobile payment decisions, experimental methods were conducted to construct a model that how the trust factor (popularity) and safety factors (pay amount and compensation) influence users’ perceived trust, perceived safety and willingness to use mobile payment. Results showed that perceived trust and perceived safety would influence willingness to use mobile payment and perceived safety would influence perceived trust. As for the three factors, popularity would influence willingness via perceived safety; compensation would influence perceived safety and perceived trust but wouldn’t influence willingness; pay amount had no direct influence on users’ perceived safety, perceived trust or willingness, but it had interaction influence with popularity and compensation.',
			
			},

			{
				title: '研究框架',

			},

			{	
				subtitle:'研究問題',
				subdesc:'本研究透過模擬實驗設計，試圖探究知名度(信任)、支付額度(安全)和補償度(安全)這三個因子，對於用戶感知信任、感知安全以及使用意願的影響，並對提出的移動支付意願的模型進行驗證。'
			
			},

			{	
				subtitle:'自變量',
				subdesc:'1. 知名度(Awareness, A):有兩個水平，分別是:高知名度公司和低知名度公司。\n2. 支付額度(Payment, P):有四個水平，分別是：支付金額為50元（場景為咖啡廳）、100元（場景為超市）、200元（場景為餐廳）和500元（場景為百貨購物）。\n3. 補償度(Compensation, C): 有兩個水平，分別是：有補償和無補償。'
			
			},

			{	
				subtitle:'因變量',
				subdesc: '被試者對於系統的感知信任、感知安全和使用意願，透過被試完成實驗任務後填寫的問卷來進行測量。'
			
			},

			{	
				subtitle:'實驗設計',
				subdesc: '這個實驗采用2*4*2的設計，共召集60名被試，其中知名度為組間變量，將被試分為兩組，每組30人。被試均為清華大學的學生，平均年齡23.2歲（SD=2.4）。其中男生29人，女生31人，90%的人月收入小於5000元，87%的人使用過移動支付。\n被試需完成不同支付額度和補償條件下的8個場景的實驗，場景的順序隨機，並且這些場景將透過PPT，由動畫的模式讓播放給實驗被試觀看每觀看完一個場景，被試需填寫問卷以獲得被試在該場景中對於系統信任程度、感知安全的看法，以及使用意願。完成全部8個場景後，被試需再填寫問卷並完成一個簡短的實驗後訪談以獲得被試對於移動支付總體的態度和看法。'
			
			},			
			

			{
				title: '實驗分析',
				subtitle:'原始模型驗證',
				subdesc:'首先使用Amos17進行結構方程（Structural Equation Modeling, SEM）驗證因子的概念建構出原始模型。原始模型的CMIN=13.529>5；CFI=0.864<0.9；RMSEA=0.162>0.08，說明原始模型沒有良好的擬合。於是，我們通過修正指標(MI)來找出使卡方擬合指數降低的信息，發現指數前三個分別是: (1)感知安全影響感知信任(MI=378.68) (2)補償度影響感知信任(MI=136.546) (3)知名度影響感知安全(MI=21.91)這三條關系。因此我們加上這三個關係之後，建構出改善模型。改善模型的CMIN=3.479<5； GFI=0.924>0.8；CFI=0.974>0.9； RMSEA=0.072<0.08，說明改善模型達到良好的擬合，可以用來解釋變數之間的關係。'
			},

			{
				subtitle:'用戶整體感知信任和感知安全',
				subdesc:'實驗在問卷中對用戶對於移動支付的整體感知信任和感知安全進行了7分Likert量表的考察，結果表明，用戶對移動支付的整體感知信任為5.07分（SD=1.22），整體感知安全為4.83分（SD=1.26）。'
			},

			{
				title: '結論',
				subtitle:'實驗結論',
				subdesc:'1. 知名度對於感知信任來說並沒有影響，但會影響使用意願。相較於低知名度的移動支付系統，用戶在使用高知名支付系統時，並不會感到更信任，但是會感到更安全，並且也會更願意使用這個系統。\n2. 支付金額的多少(50元到500元)對於用戶來說沒有影響。相較於支付500元，用戶不會因為只支付50元而感到更安全和更願意使用這個系統。\n3. 損失金額有沒有受到補償會影響用戶感知安全，並且也會影響感知信任，但不會直接影響使用意願。也就是說相較於沒有補償的支付情境，用戶對於有補償的情境會感到更信任和更安全。\n4. 感知信任和感知安全會影響使用意願，並且感知安全會影響感知信任。\n5. 支付金額與知名度、支付金額與補償度對用戶的感知信任、感知安全和使用意願存在一定的交互影響效應'
			
			},
			{
				subtitle:'建議與限制',
				subdesc:'根據本研究的結果，可以在企業設計移動支付產品和服務時提出以下建議：\n1. 即使不是大知名度的支付公司，也可以開發移動支付業務，用戶也會有一定的使用意願；\n2. 根據自身知名度的大小，來設定支付額度；\n3. 考慮若發生安全威脅時，提供用戶補償；\n但是本文的研究仍有一定局限性如下:\n1. 個體局限：為了使個體間的差異減到最小，本研究的被試都是清華大學的學生，並且大部份是理工科系學生。\n2. 實驗情境局限: 本研究的實驗情境是讓被試看PPT上的情境，並非直接讓被試體驗支付的流程。並且也不是使用被試自己的錢。\n3. 變量水平局限：本研究的支付金額範圍的設定是采用支付寶«2013年中國消費者如何看待移動支付報告»中的調查結果，然而這兩年移動支付市場變化迅速，並且在本研究調查中，用戶“實際支付”金額範圍也高於本研究中設定許多。'
			},
			{
				url:'',
			},


				
		]


		preface = Characterize(preface);  

		const display = contents.map((content, index) => {
				return Object.keys(content).map(function(key){

					if (key === 'pic') {
						var pic;
						pic = content.pic.map(p=>{
							return <div className='pic'><img src={p[Object.keys(p)[0]]}/></div>
						})

						return pic
					}
					else if (key === 'url'){
						return(
							<div className="external-link">
							<Link to={content.url} target='_blank'>
								完整論文
							</Link>
							</div>
						)
					}
					else {
						return (
							<div className={key}>
								{Characterize(content[key])}
							</div>
								
						)
					}
				})
		})

		return (
			<div>
			<div className='portfolio-description'>
				<div className='headline'>
					<span>{headline}</span>
				</div>
				<div className='sub-headline'>
					<span>{sub_headline}</span>
				</div>
				<div className='pic'>
					<img src={mainpic} />
				</div>
				<div className='preface'>
					<span>{preface}</span>
				</div>
				<div className='content'>
					{display}			
				</div>
			</div>
			<div className='previous-next'>
				<Navigation index={this.props.index} category={this.props.category} c_key={this.props.c_key}/>
			</div>
			</div>
	       )
	}
}

export default PortfolioItemPool5;
