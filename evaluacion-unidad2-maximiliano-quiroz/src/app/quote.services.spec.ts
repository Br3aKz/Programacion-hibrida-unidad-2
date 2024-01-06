import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private sqlite: SQLite) {}

  initDatabase(): Promise<void> {
    return this.sqlite.create({
      name: 'quotes.db',
      location: 'default',
    })
    .then((db: SQLiteObject) => {
      return db.executeSql(`
        CREATE TABLE IF NOT EXISTS quotes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          quote TEXT,
          author TEXT
        )
      `, []);
    })
    .catch((error: any) => console.error('Error initializing SQLite database', error));
  }

  getAllQuotes(): Promise<any[]> {
    return this.sqlite
      .executeSql('SELECT * FROM quotes', [])
      .then((response: { rows: { length: number; item: (arg0: number) => any; }; }) => {
        let quotes = [];
        for (let i = 0; i < response.rows.length; i++) {
          quotes.push(response.rows.item(i));
        }
        return quotes;
      })
      .catch((error: any) => {
        console.error('Error fetching quotes from SQLite', error);
        return [];
      });
  }

  addQuote(quote: { quote: string, author: string }): Promise<void> {
    return this.sqlite.executeSql('INSERT INTO quotes (quote, author) VALUES (?, ?)', [quote.quote, quote.author]);
  }
}