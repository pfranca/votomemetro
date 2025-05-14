
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="fade-in quiz-container flex items-center justify-center min-h-[70vh]">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-2">VotóMEMEtro Legislativas 2025</CardTitle>
          <CardDescription className="text-lg">
            Descobre com que partido te alinhas (mesmo que não queiras)
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p>
            O VotóMEMEtro é uma ferramenta interativa que te ajuda — a ti, o português comum — a perceber com que partido andas a dar match nas <em>primeiras</em> Legislativas de 2025.
          </p>
          
          <p>
            Os resultados estão certos 100% das vezes, confia Joca.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button 
            className="px-8 py-6 text-lg" 
            onClick={onStart}
          >
            Começar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizIntro;
