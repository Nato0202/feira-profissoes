import { connection } from "../config/db.js";

// Criar visitante
export async function createVisitante(data, qrCode) {
  console.log("Dados recebidos na função createVisitante:", data);
  console.log("QR Code gerado:", qrCode);

  // Garantir que o campo nome tenha um valor (não pode ser null)
  if (!data.nome) {
    throw new Error("O campo nome é obrigatório");
  }

  // Verificar cada parâmetro individualmente para garantir que não sejam undefined
  const nome = data.nome;
  const escolaridade = data.escolaridade !== undefined ? data.escolaridade : null;
  const interesses = data.interesses !== undefined ? data.interesses : null;
  const previsao_chegada = data.previsao_chegada !== undefined ? data.previsao_chegada : null;
  const email = data.email !== undefined ? data.email : null;
  const como_soube = data.como_soube !== undefined ? data.como_soube : null;
  const telefone = data.telefone !== undefined ? data.telefone : null;
  const ja_foi_aluno = data.ja_foi_aluno !== undefined ? data.ja_foi_aluno : 0;
  const cpf = data.cpf !== undefined ? data.cpf : null;

  const params = [
    nome,
    escolaridade,
    interesses,
    previsao_chegada,
    email,
    como_soube,
    telefone,
    ja_foi_aluno,
    cpf,
    qrCode
  ];

  console.log("Parâmetros para a consulta SQL:", params);

  // Verificar se algum parâmetro é undefined
  for (let i = 0; i < params.length; i++) {
    if (params[i] === undefined) {
      console.error(`Parâmetro ${i} é undefined:`, params[i]);
      throw new Error(`Parâmetro ${i} é undefined`);
    }
  }

  try {
    const [result] = await connection.execute(
      `INSERT INTO visitantes 
      (nome, escolaridade, interesses, previsao_chegada, email, como_soube, telefone, ja_foi_aluno, cpf, qr_code)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      params
    );
    console.log("Inserção realizada com sucesso");
    return result;
  } catch (err) {
    console.error("Erro na execução da consulta SQL:", err);
    throw err;
  }
}

// Buscar visitante por nome + QR Code
export async function findVisitanteByNomeAndQrCode(nome, qrCode) {
  const [rows] = await connection.execute(
    "SELECT * FROM visitantes WHERE nome = ? AND qr_code = ?",
    [nome, qrCode]
  );
  return rows[0];
}

// Buscar visitantes por nome ou QR code
export async function searchVisitantes(nome, qrCode) {
  let query = "SELECT * FROM visitantes WHERE 1=1";
  const params = [];

  if (nome) {
    query += " AND nome LIKE ?";
    params.push(`%${nome}%`);
  }

  if (qrCode) {
    query += " AND qr_code LIKE ?";
    params.push(`%${qrCode}%`);
  }

  const [rows] = await connection.execute(query, params);
  return rows;
}
