Template.topicIndex.helpers({
  topics: function () {
    return Topics.find(
      { topicId: this.topicId },
      {
        sort: { timestamp: -1 }
      }
    );
  }
});
