import React, { Component } from 'react';

/***
 
 characterize() is responsible for generating characterized html elements of 
 1. New line 
 2. Bold words   

 ***/

var characterize = function(string) {
		return (
				string.split("\n").map(i => {
					var temp = i.split("\b").map((j, index) =>{
						if ((index % 2) === 0){
							return j;
						}
						else {
							return <span className='thick'>{j}</span>;
						}
					})
					return <div><span>{temp}</span></div>;
				})
		)
	}

export default characterize;
