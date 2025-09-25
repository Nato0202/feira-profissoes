import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  // O token vem no formato "Bearer token aqui"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token malformado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardamos os dados do usuário no req para uso posterior
    req.user = decoded;

    next(); // segue para a rota
  } catch {
    return res.status(403).json({ message: "Token inválido ou expirado" });
  }
}
