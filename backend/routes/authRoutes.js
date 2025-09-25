import express from "express";
import * as repo from "../controllers/authController.js";
import * as token from "../middleware/authMiddleware.js";

const router = express.Router();

// Aluno
router.post("/register/aluno", repo.registerAluno);
router.post("/login/aluno", repo.loginAluno);

// Visitante
router.post("/register/visitante", repo.registerVisitante);
router.post("/login/visitante", repo.loginVisitante);

// Busca de visitantes
router.get("/visitantes/search", repo.searchVisitantes);

// Rota protegida (token jwt necessário)
router.get("/perfil", token.verifyToken, (req, res) => {
  res.json({ message: "Acesso autorizado!", user: req.user });
});

export default router;
