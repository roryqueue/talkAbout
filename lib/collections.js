Topics = new Mongo.Collection("topics");
// Topics.attachSchema( new SimpleSchema({
//   name: {
//     type: String,
//     label: "Name",
//     max: 200
//   },
//   url: {
//     type: String,
//     label: "Link",
//     max: 200
//   },
//   timestamp: {
//     type: Date,
//     autoValue: function() { return new Date; }
//   }
// }));

Comments = new Mongo.Collection("comments");
// Comments.attachSchema( new SimpleSchema({
//   text: {
//     type: String,
//     label: "Comment",
//     max: 1000
//   },
//   topicId: {
//     type: String//,
//     // autoValue: function() { console.log(this.topic._id); return this.topic._id; }
//   },
//   timestamp: {
//     type: Date,
//     autoValue: function() { return new Date; }
//   }
// }));
