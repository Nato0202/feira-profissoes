import bcrypt from "bcryptjs";
import * as alunoModel from "../models/alunoModel.js";
import * as visitanteModel from "../models/visitanteModel.js";
import { generateToken } from "../middleware/generateToken.js";
import crypto from "crypto";

// ================= ALUNO =================
export async function registerAluno(req, res) {
  try {
    const { email, senha } = req.body;

    const hashedPassword = await bcrypt.hash(senha, 10);
    await alunoModel.createAluno(email, hashedPassword);

    res.status(201).json({ message: "Aluno registrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar aluno", details: err });
  }
}

export async function loginAluno(req, res) {
  try {
    const { email, senha } = req.body;

    const alunoEncontrado = await alunoModel.findAlunoByEmail(email);
    if (!alunoEncontrado) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    const isMatch = await bcrypt.compare(senha, alunoEncontrado.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const token = generateToken(alunoEncontrado.id);
    res.json({ message: "Login realizado com sucesso", token });
  } catch (err) {
    res.status(500).json({ error: "Erro no login", details: err });
  }
}

// ================= VISITANTE =================
export async function registerVisitante(req, res) {
  try {
    const data = req.body;
    console.log("Dados recebidos para registro:", data); // Log para debug
    const qrCode = crypto.randomBytes(4).toString("hex"); // Gera código único

    await visitanteModel.createVisitante(data, qrCode);

    res
      .status(201)
      .json({ message: "Visitante registrado com sucesso!", qrCode });
  } catch (err) {
    console.error("Erro ao registrar visitante:", err); // Log para debug
    res.status(500).json({ error: "Erro ao registrar visitante", details: { message: err.message, stack: err.stack } });
  }
}

export async function loginVisitante(req, res) {
  try {
    const { nome, qr_code } = req.body;

    const visitanteEncontrado = await visitanteModel.findVisitanteByNomeAndQrCode(nome, qr_code);
    if (!visitanteEncontrado) {
      return res.status(404).json({ error: "Visitante não encontrado" });
    }

    res.json({ message: "Login realizado com sucesso", visitante: visitanteEncontrado });
  } catch (err) {
    res.status(500).json({ error: "Erro no login visitante", details: err });
  }
}

// ================= BUSCA VISITANTES =================
export async function searchVisitantes(req, res) {
  try {
    const { nome, qrCode } = req.query;
    
    const visitantes = await visitanteModel.searchVisitantes(nome, qrCode);
    res.json(visitantes);
  } catch (err) {
    res.status(500).json({ error: "Erro na busca de visitantes", details: err });
  }
}
