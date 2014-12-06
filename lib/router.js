Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('frontPage');
});

Router.route('/:name', function () {
  var topic = (Topics.findOne({name: this.params.name}))._id;
  this.render('topic', {data: topicId});
});
