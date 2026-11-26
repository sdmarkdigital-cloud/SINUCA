# STARKER SINUCA V1.0
Render Web Service: Node, build `npm install`, start `npm start`. Envie os arquivos na raiz do GitHub. Sem banco de dados. Modalidades simplificadas: brasileira por soma de pontos (7 bolas), bola 8 (lisas/listradas), bar (pares/ímpares com 15 bolas). Não implementa regras oficiais completas, efeito na branca ou áudio. Servidor simula a física e valida a vez. Salas voláteis. Teste multiplayer após publicação.

V1.1: mire com o mouse, segure o botão esquerdo na mesa e solte para tacar. A força chega a 100% após 1,6 segundo. Esc cancela. No celular, pressione e solte.

V1.2: música instrumental original gerada via Web Audio e efeitos de tacada, colisão, tabela e caçapa enviados pelo servidor. Música e efeitos têm controles independentes. O áudio começa após interação do usuário. Atualizar index.html, server.js e physics.js juntos.

V1.3: física em passos fixos, snapshots 20 Hz e interpolação visual; mesa e bolas em cache. Atualize index.html, server.js e physics.js.

## V1.4
Rolamento visual esférico por deslocamento/raio, faixas e números projetados na superfície, iluminação fixa e cores mais saturadas. Apenas index.html mudou em relação à V1.3. Física e sincronização do servidor preservadas. Validação de sintaxe; teste visual e online ainda necessário.

V1.5: interpolação por quadro do servidor, buffer inicial de 120 ms, cache de iluminação e áudio, textura de 40 px e atualização visual de rotação limitada a aproximadamente 30 Hz. Atualize index.html e server.js juntos.
