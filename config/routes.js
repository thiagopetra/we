/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */



/**
 * (1) Core middleware
 *
 * Middleware included with `app.use` is run first, before the router
 */


/**
 * (2) Static routes
 *
 * This object routes static URLs to handler functions--
 * In most cases, these functions are actions inside of your controllers.
 * For convenience, you can also connect routes directly to views or external URLs.
 *
 */

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  // 
  // (This would also work if you had a file at: `/views/home.ejs`)
  '/': {
    view: 'home/index'
  },

  'get /signup': {
    controller: 'users',
    action: 'signup'
    //view: 'users/signup'
  },

  'post /signup': {
    controller: 'users',
    action: 'create'
    //view: 'users/signup'
  },

  'get /dashboard': {
       controller: 'main',
       action: 'dashboard'
  },

  'get /links' : {
       controller: 'links',
       action: 'index'
  },

  'get /templates/:id?.ejs' : {
       controller: 'template',
       action: 'ejs'
  },
  /*
  'get /templates/:id?.html' : {
       controller: 'template',
       action: 'find'
  },

  'get /templates/:action/:id?.html' : {
       controller: 'template',
       action: 'find'
  },
  */
  // Standard RESTful routing

  // If no id is given, an array of all users will be returned
  'get /users/:uid/messenger/:id?': {
      controller    : 'messenger',
      action        : 'index'
  },
  'post /users/:uid/messenger': {
      controller    : 'messenger',
      action        : 'create'
  },
  'put /users/:uid/messenger/:id?': {
      controller    : 'messenger',
      action        : 'update'
  },
  'delete /users/:uid/messenger/:id?': {
      controller    : 'messenger',
      action        : 'destroy'
  },

  'get /users/current': {
    controller    : 'users',
    action        : 'current'
  },

  // User Auth
  'post /users/login': {
    controller    : 'users',
    action        : 'login'
  },

  'get /users/logout': {
    controller    : 'users',
    action        : 'logout'
  },

  'post /users/logout': {
    controller    : 'users',
    action        : 'logout'
  },

  // form to get one time login email
  'get /user/forgot_password': {
    controller    : 'users',
    action        : 'forgotPasswordForm'
  },

  // get logged in user avatar
  'get /user/avatar/:id': {
    controller    : 'users',
    action        : 'getAvatar'
  },

  'post /user/avatar': {
    controller    : 'users',
    action        : 'changeAvatar'
  },

  'get /images/': {
    controller    : 'images',
    action        : 'find'
  },

  //  -- MESSENGER

  'get /messenger/start': {
      controller    : 'messenger',
      action        : 'start'
  },

  // -- ACTIVITIES
  'post /activity': {
    controller    : 'activity',
    action        : 'create'
  },


  // -- FILES

  'get /files': {
      controller    : 'files',
      action        : 'index'
  },

  'post /files': {
      controller    : 'files',
      action        : 'create'
  },

  // -- ADMIN
  'get /admin/roles': {
      controller    : 'roles',
      action        : 'index'
  },

  'post /admin/roles': {
      controller    : 'roles',
      action        : 'create'
  },
  
  'put /admin/roles/:id': {
      controller    : 'roles',
      action        : 'update'
  },


  'delete /admin/roles/:id': {
      controller    : 'roles',
      action        : 'delete'
  }

  /*
  // But what if you want your home page to display
  // a signup form located at `views/user/signup.ejs`?
  '/': {
    view: 'user/signup'
  }


  // Let's say you're building an email client, like Gmail
  // You might want your home route to serve an interface using custom logic.
  // In this scenario, you have a custom controller `MessageController`
  // with an `inbox` action.
  '/': 'MessageController.inbox'


  // Alternatively, you can use the more verbose syntax:
  '/': {
    controller: 'MessageController',
    action: 'inbox'
  }


  // If you decided to call your action `index` instead of `inbox`,
  // since the `index` action is the default, you can shortcut even further to:
  '/': 'MessageController'


  // Up until now, we haven't specified a specific HTTP method/verb
  // The routes above will apply to ALL verbs!
  // If you want to set up a route only for one in particular
  // (GET, POST, PUT, DELETE, etc.), just specify the verb before the path.
  // For example, if you have a `UserController` with a `signup` action,
  // and somewhere else, you're serving a signup form looks like: 
  //
  //		<form action="/signup">
  //			<input name="username" type="text"/>
  //			<input name="password" type="password"/>
  //			<input type="submit"/>
  //		</form>

  // You would want to define the following route to handle your form:
  'post /signup': 'UserController.signup'


  // What about the ever-popular "vanity URLs" aka URL slugs?
  // (you might remember doing this with `mod_rewrite` in Apache)
  //
  // This is where you want to set up root-relative dynamic routes like:
  // http://yourwebsite.com/twinkletoez
  //
  // NOTE:
  // You'll still want to allow requests through to the static assets,
  // so we need to set up this route to ignore URLs that have a trailing ".":
  // (e.g. your javascript, CSS, and image files)
  'get /*(^.*)': 'UserController.profile'

  */
};



/** 
 * (3) Action blueprints
 * These routes can be disabled by setting (in `config/controllers.js`):
 * `module.exports.controllers.blueprints.actions = false`
 *
 * All of your controllers ' actions are automatically bound to a route.  For example:
 *   + If you have a controller, `FooController`:
 *     + its action `bar` is accessible at `/foo/bar`
 *     + its action `index` is accessible at `/foo/index`, and also `/foo`
 */


/**
 * (4) Shortcut CRUD blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *			`module.exports.controllers.blueprints.shortcuts = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *		/foo/find/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		/foo/create		->	create a lampshade using specified values
 *
 *		/foo/update/:id	->	update the lampshade with id=:id
 *
 *		/foo/destroy/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (5) REST blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *		`module.exports.controllers.blueprints.rest = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *
 *		get /foo/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		post /foo		-> create a lampshade using specified values
 *
 *		put /foo/:id	->	update the lampshade with id=:id
 *
 *		delete /foo/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (6) Static assets
 *
 * Flat files in your `assets` directory- (these are sometimes referred to as 'public')
 * If you have an image file at `/assets/images/foo.jpg`, it will be made available
 * automatically via the route:  `/images/foo.jpg`
 *
 */



/**
 * (7) 404 (not found) handler
 *
 * Finally, if nothing else matched, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 */
 
