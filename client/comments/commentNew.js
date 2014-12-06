// Template.commentNew.helpers({
//   topicId: function () {
//     return this.topicId;
//   }
// });
Template.commentNew.events({
  'submit #commentForm': function () {
    var text = event.target.text.value;
    var topicId = this.topicId;

    Comments.insert({
      text: text,
      topicId: topicId,
      timestamp: new Date()
    });

    event.target.text.value = "";

    return false;
  }
});
