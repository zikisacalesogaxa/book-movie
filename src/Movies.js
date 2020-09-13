import React, { Component } from 'react';

export default class Page extends Component {
	state = {
		movies: [
			'Ironman',
			'Superman',
			'Batman',
			'Suicide Squad',
			'Justice League',
			'Lion King',
			'The Blacklist Movie'
		],
		bookingMovie: '',
		bookings: [],
		cancellation: [],
		two_pm: [],
		five_pm: [],
		eight_pm: []
	};

	handleBooking = (e) => {
		let bookingMovie = e.target.value;
		this.setState({
			bookingMovie
		});
	};

	book = (e) => {
		e.preventDefault();
		let { value } = e.target;
		if (value === 'two_pm') {
			this.setState({
				two_pm: [ ...this.state.two_pm, this.state.bookingMovie ]
			});
		}
		if (value === 'five_pm') {
			this.setState({
				five_pm: [ ...this.state.five_pm, this.state.bookingMovie ]
			});
		}
		if (value === 'eight_pm') {
			this.setState({
				eight_pm: [ ...this.state.eight_pm, this.state.bookingMovie ]
			});
		}
	};

	cancel = (e) => {
		e.preventDefault();
		let { value } = e.target;
		if (value === 'two_pm') {
			let newarr = this.state.two_pm.filter((movie) => {
				return movie !== this.state.bookingMovie;
			});
			this.setState({
				two_pm: [ newarr ]
			});
		}
		if (value === 'five_pm') {
			let newarr = this.state.five_pm.filter((movie) => {
				return movie !== this.state.bookingMovie;
			});
			this.setState({
				five_pm: [ newarr ]
			});
		}
		if (value === 'eight_pm') {
			let newarr = this.state.eight_pm.filter((movie) => {
				return movie !== this.state.bookingMovie;
			});
			this.setState({
				eight_pm: [ newarr ]
			});
		}
	};

	render() {
		let { movies, bookingMovie, two_pm, five_pm, eight_pm } = this.state;
		return (
			<div>
				<div className="movies--container">
					<h1>Select Movie</h1>
					<div className="movies">
						{movies.map((movie, index) => {
							return (
								<button className="movie" key={index} value={movie} onClick={this.handleBooking}>
									{movie}
								</button>
							);
						})}
					</div>
				</div>
				{bookingMovie.length ? (
					<div className="booking">
						<form>
							<h1>Booking for: <i><u>{bookingMovie}</u></i></h1>
							<input id="username" type="text" placeholder="username" required />
							<div className="actions">
								<div className="time">
									<p>Two PM Slot</p>
									<button onClick={this.book} value="two_pm">
										Book
									</button>
									<button onClick={this.cancel} value="two_pm">
										Cancel
									</button>
								</div>
								<div className="time">
									<p>Five PM Slot</p>
									<button onClick={this.book} value="five_pm">
										Book
									</button>
									<button onClick={this.cancel} value="five_pm">
										Cancel
									</button>
								</div>
								<div className="time">
									<p>Eight PM Slot</p>
									<button onClick={this.book} value="eight_pm">
										Book
									</button>
									<button onClick={this.cancel} value="eight_pm">
										Cancel
									</button>
								</div>
							</div>
						</form>
					</div>
				) : (
					''
				)}
				<div className="booking--details">
					{two_pm.length && two_pm.length !== 0 ? (
						<div className="time--wrapper">
							<h3>Two PM Bookings</h3>
							{two_pm.map((movie, index) => {
								return (
									<div key={index}>
										<h1>{movie}</h1>
									</div>
								);
							})}
						</div>
					) : (
						''
					)}
					{five_pm.length && five_pm.length !== 0 ? (
						<div className="time--wrapper">
							<h3>Five PM Bookings</h3>
							{five_pm.map((movie, index) => {
								return (
									<div key={index}>
										<h1>{movie}</h1>
									</div>
								);
							})}
						</div>
					) : (
						''
					)}
					{eight_pm.length && eight_pm.length !== 0 ? (
						<div className="time--wrapper">
							<h3>Eight PM Bookings</h3>
							{eight_pm.map((movie, index) => {
								return (
									<div key={index}>
										<h1>{movie}</h1>
									</div>
								);
							})}
						</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}
