import { Router } from "express";
import products from "../products.json" assert { type: 'json' };

const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:pid", (req, res) => {
  const { idProduct } = req.params;

  const product = products.find((p) => p.id === idProduct);

  if (!product) {
    return res
      .status(400)
      .send({ status: "error", message: "Producto no encontrado" });
  }

  return res.status(200).send({ status: "success", payload: p });
});

export default router;
