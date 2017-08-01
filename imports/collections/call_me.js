import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


// Callback.schema = new SimpleSchema({
// createdAt: {type: Date},
// 	name: {type: String},
// 	phone: {type: Number}
// })

Meteor.methods({
	'callMe.insert': function(caller) {
		return CallMe.insert({
			createdAt: new Date(),
			name: caller.name,
			phone: caller.phone
		})
	}
});

export const CallMe = new Mongo.Collection('callMe');
