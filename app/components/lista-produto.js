import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ListaProduto extends Component {
  @service('produto') produtoService;
  @service router;

  @tracked produtos;

  constructor(owner, args) {
    super(owner, args);
    this.listar();
  }

  async listar() {
    this.produtoService.listar().then((result) => {
      this.produtos = result;
    });
  }

  @action async editar(id) {
    console.log(id);
    console.log('editar');
    this.router.transitionTo('cadastro-produto', { queryParams: { id: id } });
  }

  @action async excluir(id) {
    console.log(id);
    console.log('excluir');
    this.produtoService.excluir(id).then((result) => {
      this.listar();
    });
  }
}
