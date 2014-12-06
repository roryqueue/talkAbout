Template.topicShow.helpers({
  topic: function () {
    return Topics.findOne( this.topicId );
  },
  comments: function () {
    return Comments.find(
      {},
      {
        sort: { timestamp: -1 }
      }
    );
  }
});
