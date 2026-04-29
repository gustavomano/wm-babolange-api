const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite que seu Front-end acesse a API 
app.use(express.json()); // Para o servidor entender o formato JSON 

app.post('/orcamento', (req, res) => {
    const { nome, whatsapp, materiais } = req.body;

    // Formatação profissional da mensagem para o WhatsApp 
    const mensagem = `*Novo Orçamento - WM Babolange*\n\n` +
                     `*Cliente:* ${nome}\n` +
                     `*Contato:* ${whatsapp}\n` +
                     `*Materiais:* \n${materiais}`;
    
    // Seu número de atendimento (com DDD e sem espaços) 
    const telefoneDeposito = "5512996236909"; 
    const urlWhatsapp = `https://wa.me/${telefoneDeposito}?text=${encodeURIComponent(mensagem)}`;

    // Devolve a URL pronta para o Front-end 
    res.json({ url: urlWhatsapp });
});

// Porta dinâmica para o Render ou 3000 localmente [cite: 109]
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));