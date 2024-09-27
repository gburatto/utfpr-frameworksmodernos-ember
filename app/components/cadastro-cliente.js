import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CadastroCliente extends Component {
  @service('cliente') clienteService;

  queryParams = ['id'];
  @tracked id = null;

  @tracked nome = '';
  @tracked email = '';

  @tracked isLoading = false;

  @tracked sucesso = false;
  @tracked erro = false;

  constructor(owner, args) {
    super(owner, args);
    if (this.id) {
      this.clienteService.buscarPorId(this.id).then(
        (result) => {
          this.nome = result.nome;
          this.email = result.email;
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }

  get desabilitar() {
    if (this.nome && this.email) {
      return false;
    }
    return true;
  }

  @action async salvar() {
    this.isLoading = true;
    let data = {
      id: this.id,
      nome: this.nome,
      email: this.email,
    };

    this.clienteService.salvar(data).then(
      (result) => {
        this.isLoading = false;
        this.sucesso = true;
      },
      (error) => {
        this.erro = true;
        this.isLoading = false;
        console.log(error);
      },
    );
  }
}
