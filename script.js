/*var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},
});

var image = {
	name: 'cat',
	src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));*/


//task 14.4

//data
var movies = [
	{
		id: 1,
		title: 'The Shawshank Redemption',
		desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
	},
	{
		id: 2,
		title: 'Fight Club',
		desc: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
	},
	{
		id: 3,
		title: 'Se7en',
		desc: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
	},
	{
		id: 4,
		title: 'The Usual Suspects',
		desc: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
	}
];


//app
var MovieList = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'movieList'},
				React.createElement('h1', {}, 'Films list'),
				React.createElement(Movies, {items: movies}, {})
			)
		);
	}
});

//movie
var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement('h2', {}, 'Title: ' + this.props.item.title),
				React.createElement('p', {}, 'Description: ' + this.props.item.desc),
				React.createElement('img', {src: this.props.item.image})
			)
		);
	}
});

//movies
var Movies = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movies = this.props.items.map(function(movie) {
			return React.createElement(Movie, {item: movie, key:movie.id});
		});

		return (
			React.createElement('ul', {}, movies)
		);
	}
});

//loading films list
var movieList = React.createElement(MovieList);
ReactDOM.render(movieList, document.getElementById('app'));