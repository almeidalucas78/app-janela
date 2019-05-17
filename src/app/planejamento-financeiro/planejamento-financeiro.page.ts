import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planejamento-financeiro',
  templateUrl: './planejamento-financeiro.page.html',
  styleUrls: ['./planejamento-financeiro.page.scss'],
})
export class PlanejamentoFinanceiroPage implements OnInit {

  constructor(private nav:NavController) {

   }

  ngOnInit() {
  }
  salvar(form) {
   console.log(form.value)
   const planejamento = JSON.stringify(form.value)
   const nome = form.value.nome

   localStorage.setItem(nome, planejamento)

   form.reset()

   this.nav.back()

  }
}
