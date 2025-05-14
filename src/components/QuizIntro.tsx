
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
          <CardTitle className="text-3xl font-bold mb-2">Bússola Política</CardTitle>
          <CardDescription className="text-lg">
            Descubra com que partido político suas opiniões mais se alinham
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p>
            Este questionário contém {5} perguntas sobre diversos temas políticos 
            e sociais. Com base nas suas respostas, iremos mostrar qual partido 
            político melhor representa as suas opiniões.
          </p>
          
          <p>
            Para cada pergunta, escolha a opção que melhor reflete a sua opinião.
            Você pode voltar e alterar suas respostas a qualquer momento antes de
            ver os resultados.
          </p>
          
          <p>
            Este é um projeto educativo e não coleta nenhum dado pessoal.
            Todas as respostas são processadas apenas no seu navegador.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button 
            className="px-8 py-6 text-lg" 
            onClick={onStart}
          >
            Começar o Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizIntro;
