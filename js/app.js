App = Ember.Application.create({
	
});

// ROUTER
App.Router.map(function(){
  this.resource('bullets',{ path: '/:bullet_id' });
});

App.BulletsRoute = Ember.Route.extend({
  model: function(){
    return App.Bullets;
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('bullets');
  }
});



// Controller //
App.BulletsController = Ember.ArrayController.extend({
  //sortProperties: ['bullet'], sortAscending: true,
  bulletCount: function(){
    var bullets = this.get('content');
    var sub = bullets[0].bullet;
    sub = sub.toUpperCase();
    return sub;
    /*
    return this.get('model.length');
    var store = this.store;
    return store.filter('post', { favorited: true }, function(post) {
      return post.get('isFavorited');
    });
    */
  }.property('@each')

});

Ember.Handlebars.helper('highlight', function(value, options) {
  var escaped = Handlebars.Utils.escapeExpression(value);
  return new Ember.Handlebars.SafeString('<span class="highlight">' + escaped + '</span>');
});



// Load the fixture data
/*
  Tasks: 0 = not a task, 1 = is a task, 2 = task started, 3 = task completed
  @ = Specific - ID, person, name, thing
  # = General - tag, class, category, subject
  + = Datetime 22-06-2014-22-12 - dd-mm-yyyy-hh-mm or just dd-mm-yy (date format needs defining by user) - Helps build calendar
*/

App.Bullets = [
    {
        "id": 1,
        "bullet": "aWork",
        "note": "Extra stuff about this bullet",
        "parent": 0,
        "dateCreated": "",
        "star": true,
        "task": 0
    },
    {
        "id": 2,
        "bullet": "zPersonal",
        "note": "Extra stuff about this bullet",
        "parent": 0,
        "dateCreated": "",
        "star": true,
        "task": 0
    },
    {
        "id": 3,
        "bullet": "People",
        "note": "Extra stuff about this bullet",
        "parent": 1,
        "dateCreated": "",
        "star": true,
        "task": 0
    },
    {
        "id": 4,
        "bullet": "z!@Jakob",
        "note": "Extra stuff about this bullet",
        "parent": 3,
        "dateCreated": "",
        "star": true,
        "task": 0
    },
    {
        "id": 5,
        "bullet": "a!@Anna",
        "note": "Extra stuff about this bullet",
        "parent": 3,
        "dateCreated": "",
        "star": true,
        "task": 0
    }
];

