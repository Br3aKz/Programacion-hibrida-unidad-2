import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-manage-quotes',
  templateUrl: './gestionar-cita.component.html',
  styleUrls: ['./gestionar-cita.component.css'],
})
export class GestionarCitaComponent implements OnInit {
  cita: any[] = [];
  quote = { cita: '', author: '' };

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quoteService.initDatabase().then(() => {
      this.loadQuotes();
    });
  }

  loadQuotes() {
    this.quoteService.getAllQuotes().then(cita => {
      this.cita = cita;
    });
  }

  submitForm() {
    this.quoteService.addQuote(this.quote).then(() => {
      this.loadQuotes();
      this.resetForm();
    });
  }

  resetForm() {
    this.quote = { cita: '', author: '' };
  }
}