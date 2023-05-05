import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word = 'angular';
  scrambledWord = this.shuffle(this.word.split('')).join('');
  guess = '';
  message = '';

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  checkGuess() {
    if (this.guess === this.word) {
      this.message = 'You win!';
    } else {
      this.message = 'Sorry, try again.';
    }
  }
}
