import React, { useState, useRef, useEffect } from 'react';
import './Clock.css';

// Count Down

const Apps = () => {
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}

	const clearTimer = (e) => {
		setTimer('00:00:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 1000);
		return deadline;
	}

	
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className='Apps'>
			
			<h1>{timer}</h1>
			<button className='button' onClick={onClickReset}>Reset</button>
		</div>
	)
}

export default Apps;