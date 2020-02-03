import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'

const collection = new Mongo.Collection('questions');

collection.schema = new SimpleSchema({
    userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: false},
    created: {type: Date, optional: false},
    resolved: {type: Boolean, optional: false}
});


export const QuestionsCollection = collection;