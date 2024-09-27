import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CadastroClienteRoute extends Route {
  @service router;

  model({ id }) {
    console.log(id);
  }
}
