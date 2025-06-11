const CodeReduction = require('./models/CodeReduction'); // adapte le chemin

app.post('/createCommande', async (req, res) => {
  const { promo } = req.body;
  let reduction = 0;

  if (promo) {
    const code = await CodeReduction.findOne({ code: promo, actif: true });
    if (code) {
      reduction = code.reduction;
    } else {
      return res.status(400).json({ error: "Code de réduction invalide" });
    }
  }

});