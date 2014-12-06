Template.topicIndex.helpers({
  topics: function () {
    return Topics.find(
      {},
      {
        sort: { timestamp: -1 }
      }
    );
  }
});
