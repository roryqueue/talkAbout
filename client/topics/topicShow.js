Template.topicShow.helpers({
  comments: function () {
    return Comments.find(
      { topicId: this._id },
      {
        sort: { timestamp: -1 }
      }
    );
  }
});

Template.topicShow.events({
  'submit #commentForm': function () {
    var text = event.target.text.value;
    var topicId = this._id;

    Comments.insert({
      text: text,
      topicId: this._id,
      poster: Meteor.user().emails[0].address,
      timestamp: new Date()
    });

    event.target.text.value = "";

    return false;
  }
});
