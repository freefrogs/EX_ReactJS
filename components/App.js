var contacts = [
	{
		id: 1,
		firstName: 'Joe',
		lastName: 'Doe',
		email: 'joe.doe@fake.com'
	},
	{
		id: 2,
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'jane.doe@fake.com'
	},
	{
		id: 3,
		firstName: 'Mort',
		lastName: 'Doe',
		email: 'mort.doe@fake.com'
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		);
	}
});