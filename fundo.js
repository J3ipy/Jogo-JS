function Fundo(context, imagem) {
   this.context = context;
   this.imagem = imagem;
   this.velocidade = 0;
   this.posicaoEmenda = 0;
}
Fundo.prototype = {
   atualizar: function() {
      // Atualizar a posição de emenda
      this.posicaoEmenda += 
         this.velocidade * this.animacao.decorrido / 1000;
      
      // Emenda passou da posição
      if (this.posicaoEmenda > 500)
         this.posicaoEmenda = 0;
   },
   desenhar: function() {
      var img = this.imagem;  // Para facilitar a escrita :D
      
      // Primeira cópia
      var posicaoY = this.posicaoEmenda - 500;
      this.context.drawImage(img, 0, posicaoY, 900, 500);
      
      // Segunda cópia
      posicaoY = this.posicaoEmenda;
      this.context.drawImage(img, 0, posicaoY, 900, 500);     
   }
}

