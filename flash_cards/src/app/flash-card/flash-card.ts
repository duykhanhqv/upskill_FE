import { Component, input } from '@angular/core';
import { FlashCardInfo } from '../interfaces/flashcard';
import { ProgressBar } from '../progress-bar/progress-bar';

@Component({
  selector: 'app-flash-card',
  imports: [ProgressBar],
  templateUrl: './flash-card.html',
  styleUrl: './flash-card.css',
})
export class FlashCard {
  private currentIndex: number = 0;

  flashCardList = input.required<FlashCardInfo[]>();

  openAnswer() {
    const answerElement = document.querySelector('.card-answer');
    console.log('Answer element:', answerElement);
    if (answerElement?.hasAttribute('hidden')) {
      answerElement.removeAttribute('hidden');
    } else {
      answerElement?.setAttribute('hidden', '');
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCardDisplay();
    }
  }

  nextCard() {
    if (this.currentIndex < this.flashCardList().length - 1) {
      this.currentIndex++;
      this.updateCardDisplay();
    }
  }

  private updateCardDisplay() {
    const questionElement = document.querySelector('.card-question');
    const answerElement = document.querySelector('.card-answer');

    if (questionElement && answerElement) {
      questionElement.textContent = this.flashCardList()[this.currentIndex].question;
      answerElement.textContent = this.flashCardList()[this.currentIndex].answer;
      answerElement.setAttribute('hidden', '');
    }
  }

  getProgress(): { progress: number; total: number } {
    return {
      progress: this.currentIndex + 1,
      total: this.flashCardList().length,
    };
  }
}
