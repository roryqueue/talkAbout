Topics = new Mongo.Collection("topics");
Topics.attachSchema( new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  // author: {
  //   type: String,
  //   label: "Author"
  // },
  // createdAt: {
  //   type: Date,
  //   label: "Created At",
  //   optional: true
  // },
  url: {
    type: String,
    label: "Link",
    max: 200
  }
}));

Comments = new Mongo.Collection("comments");
Comments.attachSchema( new SimpleSchema({
  text: {
    type:String,
    label: "Comment",
    max: 1000
  }
  // createdAt: {
  //   type: Date,
  //   label: "Created At",
  //   optional: true
  // },
}));
