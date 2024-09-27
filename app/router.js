import EmberRouter from '@ember/routing/router';
import config from 'ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cadastro-cliente');
  this.route('lista-cliente');
  this.route('cadastro-produto');
  this.route('lista-produto');
});
