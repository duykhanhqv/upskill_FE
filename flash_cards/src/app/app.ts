import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashCard } from './flash-card/flash-card';
import { FlashCardInfo } from './interfaces/flashcard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlashCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('flash_cards');
  flashCardList: FlashCardInfo[] = [
    {
      id: 1,
      question: 'What is the capital of France?',
      answer: 'Paris',
    },
    {
      id: 2,
      question: 'What is 2 + 2?',
      answer: '4',
    },
    {
      id: 3,
      question: 'What is the largest planet in our solar system?',
      answer: 'Jupiter',
    },
    {
      id: 4,
      question: 'Who wrote "To Kill a Mockingbird"?',
      answer: 'Harper Lee',
    },
    { id: 5, question: 'What is the chemical symbol for water?', answer: 'H2O' },
    { id: 6, question: 'What year did the Titanic sink?', answer: '1912' },
    { id: 7, question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
    { id: 8, question: 'What is the smallest prime number?', answer: '2' },
    { id: 9, question: 'In which country is the Great Barrier Reef located?', answer: 'Australia' },
    { id: 10, question: 'What is the hardest natural substance on Earth?', answer: 'Diamond' },
    { id: 11, question: 'Who is known as the "Father of Computers"?', answer: 'Charles Babbage' },
    { id: 12, question: 'What is the largest mammal in the world?', answer: 'Blue Whale' },
    { id: 13, question: 'What is the capital city of Japan?', answer: 'Tokyo' },
    {
      id: 14,
      question: 'What element does "O" represent on the periodic table?',
      answer: 'Oxygen',
    },
    { id: 15, question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare' },
    { id: 16, question: 'What is the largest desert in the world?', answer: 'Sahara Desert' },
    { id: 17, question: 'What is the main ingredient in guacamole?', answer: 'Avocado' },
    { id: 18, question: 'Who discovered penicillin?', answer: 'Alexander Fleming' },
    { id: 19, question: 'What is the capital of Canada?', answer: 'Ottawa' },
    { id: 20, question: 'What planet is known as the Red Planet?', answer: 'Mars' },
  ];
}
