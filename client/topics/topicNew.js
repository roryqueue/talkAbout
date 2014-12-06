Template.topicNew.events({
  'submit #topicForm': function () {
    var name = event.target.name.value;
    var url = event.target.url.value;

    Topics.insert({
      name: name,
      url: url,
      timestamp: new Date()
    });

    event.target.name.value = "";
    event.target.url.value = "";

    return false;
  }
});
