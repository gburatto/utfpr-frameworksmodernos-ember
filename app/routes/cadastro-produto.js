import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CadastroProdutoRoute extends Route {
  @service router;

  model({ id }) {
    console.log(id);
  }
}
