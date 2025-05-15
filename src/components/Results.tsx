
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Party } from '../types';

interface ResultsProps {
  results: Array<{ partyId: string; percentage: number }>;
  parties: Party[];
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, parties, onReset }) => {
  // Find the actual party objects based on the results
  const enrichedResults = results.map(result => {
    const party = parties.find(p => p.id === result.partyId);
    return {
      ...result,
      party
    };
  });

  return (
    <div className="fade-in quiz-container">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Resultados</CardTitle>
          <CardDescription className="text-lg text-center">
            Com base nas tuas respostas, devias considerar o seguinte partido:
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                {enrichedResults[0]?.party?.name || 'Sem correspondência'}
              </div>
              <div className="text-4xl font-extrabold" style={{ color: enrichedResults[0]?.party?.color || '#000' }}>
                {enrichedResults[0]?.percentage || 0}%
              </div>
              <div className="mt-2 text-lg max-w-md mx-auto">
                {enrichedResults[0]?.party?.description || ''}
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-xl font-semibold">Outros partidos:</div>
            
            {enrichedResults.map((result, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: result.party?.color || '#ccc' }}
                  ></div>
                  <span>{result.party?.name || 'Desconhecido'}</span>
                </div>
                <div className="font-bold">{result.percentage}%</div>
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center pt-6">
          <Button onClick={onReset} variant="outline">Refazer o Quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Results;
