import Classes from "ri4gerson";
const { Cliente, Empresa, Telefones, endereco } = Classes;

const empresa = new Empresa(
  "Empresa Exemplo Ltda",
  "Exemplo Fantasia",
  "12.345.678/0001-99",
  new endereco("SP", "São Paulo", "Rua Central", "100"),
);

empresa.adicionarTelefone(new Telefones("11", "999900000"));
empresa.adicionarTelefone(new Telefones("11", "988800000"));

const cliente1 = new Cliente(
  "Carlos",
  "123.456.789-00",
  new endereco("SP", "São Paulo", "Av. Paulista", "999"),
);
cliente1.adicionarTelefone("11", "999999999");
cliente1.adicionarTelefone("11", "988888888");
empresa.adicionarCliente(cliente1);

const cliente2 = new Cliente(
  "Alysa",
  "111.222.333-44",
  new endereco("CL", "California", "Clovis", "999"),
);
cliente2.adicionarTelefone("113", "56789944");
cliente2.adicionarTelefone("114", "55667788");
empresa.adicionarCliente(cliente2);

const cliente3 = new Cliente(
  "Guilherme",
  "555.666.777-88",
  new endereco("SP", "São Paulo", "São José dos Campos", "875"),
);
cliente3.adicionarTelefone("12", "9986314733");
cliente3.adicionarTelefone("12", "9977445566");
empresa.adicionarCliente(cliente3);

console.log("Clientes da empresa:");
empresa.listarClientes().forEach((c) => {
  console.log(`${c.acessoNome} - CPF: ${c.acessoCpf}`);
  console.log(
    "Endereço:",
    `${c.acessoEndereco.acessoRua}, ${c.acessoEndereco.acessoNumero}, ${c.acessoEndereco.acessoCidade} - ${c.acessoEndereco.acessoEstado}`,
  );
  console.log(
    "Telefones:",
    c.acessoTelefones.map((t) => t.numeroFormatado).join(", "),
  );
  console.log("---");
});

console.log("Telefones da empresa:");
console.log(
  empresa
    .listarTelefones()
    .map((t) => t.numeroFormatado)
    .join(", "),
);
