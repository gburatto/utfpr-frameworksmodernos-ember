import Service from '@ember/service';

export default class ClienteService extends Service {
  async salvar(data) {
    return fetch(`http://localhost:8080/api/cliente`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  async listar() {
    return await fetch(`http://localhost:8080/api/cliente`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  async buscarPorId(id) {
    return await fetch(`http://localhost:8080/api/cliente/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  async excluir(id) {
    return await fetch(`http://localhost:8080/api/cliente/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json());
  }
}
