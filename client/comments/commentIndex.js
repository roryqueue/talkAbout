Template.commentIndex.helpers({
  comments: function () {
    return Comments.find(
      {},
      {
        sort: { timestamp: -1 }
      }
    );
  }
});
