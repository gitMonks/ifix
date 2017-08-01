import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';

Meteor.methods({
	sendEmail: function(caller) {
		check([caller.name, caller.phone], [String]);

		this.unblock();
		Email.send({
			to: 'thanksimran@gmail.com',
			from: 'thanksimran@gmail.com',
			subject: 'Call Me Request',
			text: `Customer Name: ${caller.name}, Phone: ${caller.phone}`
		});
	}
});