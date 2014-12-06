Template.topicShow.helpers({
  topic: function () {
    return Topics.findOne( this.topicId );
  }
});
