import { QUESTION_OPTIONS_COUNT } from '@constants/constant';
import { Station, Question } from '@helpers/interface';

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
export function generateQuestions(stations: Station[]): Question[] {
  const questions: Question[] = [];

  const sortedByBikes = [...stations].sort(
    (a, b) => b.num_bikes_available - a.num_bikes_available
  );
  const topStations = sortedByBikes.slice(0, QUESTION_OPTIONS_COUNT);

  questions.push({
    question: 'Which station has the most bikes available?',
    options: shuffleArray(topStations.map(s => s.name)),
    answer: topStations[0].name,
  });

  const stationWithMostDocks = stations.reduce((max, curr) =>
    (curr.num_docks_available || 0) > (max.num_docks_available || 0) ? curr : max,
  );

  questions.push({
    question: 'Which station has the most docks available?',
    options: shuffleArray([
      ...stations.slice(0, QUESTION_OPTIONS_COUNT - 1).map(s => s.name),
      stationWithMostDocks.name,
    ]),
    answer: stationWithMostDocks.name,
  });

  const stationsWithNoBikes = stations.filter(s => s.num_bikes_available === 0);
  if (stationsWithNoBikes.length > 0) {
    const correct = stationsWithNoBikes[0];
    questions.push({
      question: 'Which station currently has 0 bikes?',
      options: shuffleArray([
        ...stations.slice(0, QUESTION_OPTIONS_COUNT - 1).map(s => s.name),
        correct.name,
      ]),
      answer: correct.name,
    });
  }

  return shuffleArray(questions);
}
