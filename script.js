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

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Films list'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));
