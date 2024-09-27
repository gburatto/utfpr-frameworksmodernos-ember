import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ListaCliente extends Component {
  @service('cliente') clienteService;
  @service router;

  @tracked clientes;

  constructor(owner, args) {
    super(owner, args);
    this.listar();
  }

  async listar() {
    this.clienteService.listar().then((result) => {
      this.clientes = result;
    });
  }

  @action async editar(id) {
    console.log(id);
    console.log('editar');
    this.router.transitionTo('cadastro-cliente', { queryParams: { id: id } });
  }

  @action async excluir(id) {
    console.log(id);
    console.log('excluir');
    this.clienteService.excluir(id).then((result) => {
      this.listar();
    });
  }
}
