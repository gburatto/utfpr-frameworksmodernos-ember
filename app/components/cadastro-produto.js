import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CadastroProduto extends Component {
  @service('produto') produtoService;

  queryParams = ['id'];
  @tracked id = null;

  @tracked nome = '';
  @tracked descricao = '';
  @tracked preco = 0;

  @tracked isLoading = false;

  @tracked sucesso = false;
  @tracked erro = false;

  constructor(owner, args) {
    super(owner, args);
    if (this.id) {
      this.produtoService.buscarPorId(this.id).then(
        (result) => {
          this.nome = result.nome;
          this.descricao = result.descricao;
          this.preco = result.preco;
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }

  get desabilitar() {
    if (this.nome && this.descricao && this.preco) {
      return false;
    }
    return true;
  }

  @action async salvar() {
    this.isLoading = true;
    let data = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
    };

    this.produtoService.salvar(data).then(
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
