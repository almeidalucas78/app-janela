import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanejamentoFinanceiroPage } from './planejamento-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: PlanejamentoFinanceiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanejamentoFinanceiroPage]
})
export class PlanejamentoFinanceiroPageModule {}
