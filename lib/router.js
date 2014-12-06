Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.route('/', function () {
  this.render('frontPage');
});

Router.route('/:_id', function () {
  var topicId = this.params._id;
  this.render('topicShow', {
    data: function() {
      return Topics.findOne({_id: this.params._id});
    }
  });
});
