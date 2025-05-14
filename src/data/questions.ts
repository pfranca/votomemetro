
import { Question, Party } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Na Energia, a REN deve ser nacionalizada",
    answers: [
      { id: "a1", text: "Concordo totalmente", value: 2 },
      { id: "a2", text: "Tendo a concordar", value: 1 },
      { id: "a3", text: "Neutro", value: 0 },
      { id: "a4", text: "Tendo a discordar", value: -1 },
      { id: "a5", text: "Discordo totalmente", value: -2 },
      { id: "a6", text: "Sem opinião", value: 0 },
    ],
  },
  {
    id: 2,
    text: "O Estado deve garantir cuidados de saúde gratuitos para todos",
    answers: [
      { id: "a1", text: "Concordo totalmente", value: 2 },
      { id: "a2", text: "Tendo a concordar", value: 1 },
      { id: "a3", text: "Neutro", value: 0 },
      { id: "a4", text: "Tendo a discordar", value: -1 },
      { id: "a5", text: "Discordo totalmente", value: -2 },
      { id: "a6", text: "Sem opinião", value: 0 },
    ],
  },
  {
    id: 3,
    text: "A imigração deve ser mais restrita",
    answers: [
      { id: "a1", text: "Concordo totalmente", value: 2 },
      { id: "a2", text: "Tendo a concordar", value: 1 },
      { id: "a3", text: "Neutro", value: 0 },
      { id: "a4", text: "Tendo a discordar", value: -1 },
      { id: "a5", text: "Discordo totalmente", value: -2 },
      { id: "a6", text: "Sem opinião", value: 0 },
    ],
  },
  {
    id: 4,
    text: "A legalização das drogas leves reduziria a criminalidade",
    answers: [
      { id: "a1", text: "Concordo totalmente", value: 2 },
      { id: "a2", text: "Tendo a concordar", value: 1 },
      { id: "a3", text: "Neutro", value: 0 },
      { id: "a4", text: "Tendo a discordar", value: -1 },
      { id: "a5", text: "Discordo totalmente", value: -2 },
      { id: "a6", text: "Sem opinião", value: 0 },
    ],
  },
  {
    id: 5,
    text: "O salário mínimo deve ser aumentado significativamente",
    answers: [
      { id: "a1", text: "Concordo totalmente", value: 2 },
      { id: "a2", text: "Tendo a concordar", value: 1 },
      { id: "a3", text: "Neutro", value: 0 },
      { id: "a4", text: "Tendo a discordar", value: -1 },
      { id: "a5", text: "Discordo totalmente", value: -2 },
      { id: "a6", text: "Sem opinião", value: 0 },
    ],
  },
];

export const parties: Party[] = [
  {
    id: "left",
    name: "Partido da Esquerda",
    color: "#FF0000",
    description: "Partido que defende políticas económicas de esquerda, com forte intervenção do estado na economia e maior investimento em serviços públicos.",
  },
  {
    id: "center-left",
    name: "Partido Centro-Esquerda",
    color: "#FF6666",
    description: "Partido que defende políticas socialmente progressistas com alguma intervenção do estado na economia.",
  },
  {
    id: "center",
    name: "Partido do Centro",
    color: "#FFCC00",
    description: "Partido que defende uma abordagem equilibrada entre políticas de esquerda e direita, com moderação em questões sociais e económicas.",
  },
  {
    id: "center-right",
    name: "Partido Centro-Direita",
    color: "#0066CC",
    description: "Partido que defende políticas económicas liberais com foco na redução de impostos e no incentivo à iniciativa privada.",
  },
  {
    id: "right",
    name: "Partido da Direita",
    color: "#003399",
    description: "Partido que defende políticas económicas liberais, estado mínimo e políticas socialmente conservadoras.",
  },
];

// Logic to calculate which party is closest to user's answers
export const calculateResults = (userAnswers: { [key: number]: number }): Result[] => {
  const partyPositions = {
    "left": { q1: 2, q2: 2, q3: -2, q4: 2, q5: 2 },
    "center-left": { q1: 1, q2: 2, q3: -1, q4: 1, q5: 1 },
    "center": { q1: 0, q2: 1, q3: 0, q4: 0, q5: 0 },
    "center-right": { q1: -1, q2: 0, q3: 1, q4: -1, q5: -1 },
    "right": { q1: -2, q2: -1, q3: 2, q4: -2, q5: -2 },
  };

  const results = parties.map(party => {
    let totalDifference = 0;
    let maxPossibleDifference = 0;
    
    // Calculate difference between user answers and party positions
    Object.keys(partyPositions[party.id as keyof typeof partyPositions]).forEach((questionKey, index) => {
      const questionId = index + 1;
      const partyValue = partyPositions[party.id as keyof typeof partyPositions][`q${questionId}` as keyof typeof partyPositions[keyof typeof partyPositions]];
      const userValue = userAnswers[questionId] || 0;
      
      // Calculate absolute difference for this question
      const difference = Math.abs(partyValue - userValue);
      totalDifference += difference;
      
      // Maximum possible difference is 4 per question (from -2 to 2)
      maxPossibleDifference += 4;
    });
    
    // Convert to similarity percentage (100% - percentage difference)
    const percentageDifference = (totalDifference / maxPossibleDifference) * 100;
    const percentage = Math.round(100 - percentageDifference);
    
    return {
      partyId: party.id,
      score: totalDifference,
      percentage,
    };
  });

  // Sort by highest percentage match
  return results.sort((a, b) => b.percentage - a.percentage);
};

interface Result {
  partyId: string;
  score: number;
  percentage: number;
}
