
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Question as QuestionType, Answer } from '../types';
import { cn } from '@/lib/utils';

interface QuestionProps {
  question: QuestionType;
  selectedAnswerId: string | null;
  onAnswerSelect: (answerId: string, value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  selectedAnswerId, 
  onAnswerSelect,
  onNext,
  onPrevious,
  isFirst,
  isLast
}) => {
  const [animation, setAnimation] = useState('fade-in');
  
  useEffect(() => {
    setAnimation('fade-in');
  }, [question.id]);

  const handleSelectAnswer = (answer: Answer) => {
    onAnswerSelect(answer.id, answer.value);
  };

  return (
    <div className={`quiz-container ${animation}`}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-medium text-center">
            {question.text}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-2">
          {question.answers.map((answer) => (
            <div
              key={answer.id}
              className={cn(
                "answer-option",
                selectedAnswerId === answer.id && "selected"
              )}
              onClick={() => handleSelectAnswer(answer)}
            >
              {answer.text}
            </div>
          ))}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            disabled={isFirst}
          >
            Anterior
          </Button>
          
          <Button 
            onClick={onNext}
            disabled={!selectedAnswerId && !isLast}
          >
            {isLast ? 'Ver Resultados' : 'Próxima'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Question;
