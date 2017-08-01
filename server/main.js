import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

import '../imports/collections/call_me';

Meteor.startup(() => {
	process.env.MAIL_URL="smtp://thanksimran:vaioBhatti%211@smtp.gmail.com:587";

	Meteor.methods({
	
		'sendEmail': function(caller) {
			check([caller.name, caller.phone], [String]);

			this.unblock();
			Email.send({
				to: 'thanksimran@gmail.com',
				from: 'thanksimran@gmail.com',
				subject: 'Call Me Request',
				text: 'Call this customer please'
			});
		}




	});
});
