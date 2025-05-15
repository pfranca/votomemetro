
import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import QuizIntro from './components/QuizIntro';
import Question from './components/Question';
import Results from './components/Results';
import ProgressDots from './components/ProgressDots';
import { questions, parties, calculateResults } from './data/questions';

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedAnswers({});
  };
  
  const handleAnswerSelect = (answerId: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: answerId }));
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz is finished
      setQuizFinished(true);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleDotClick = (questionNumber: number) => {
    setCurrentQuestionIndex(questionNumber - 1);
  };
  
  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedAnswers({});
  };
  
  // Calculate results
  const results = calculateResults(userAnswers);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <img 
              src="logo.png" 
              alt="Logo" 
              className="h-8 w-8 mr-2" 
            />
            <h1 className="text-2xl font-bold text-gray-900">
              VotóMEMEtro
            </h1>
          </div>
        </header>
          
          <main className="flex-1 container mx-auto py-6 px-4">
            {quizStarted && !quizFinished && (
              <div className="mb-8">
                <ProgressDots 
                  totalSteps={questions.length} 
                  currentStep={currentQuestionIndex + 1}
                  onDotClick={handleDotClick}
                />
              </div>
            )}
            
            {!quizStarted && (
              <QuizIntro onStart={handleStartQuiz} />
            )}
            
            {quizStarted && !quizFinished && (
              <Question
                question={currentQuestion}
                selectedAnswerId={selectedAnswers[currentQuestion.id] || null}
                onAnswerSelect={handleAnswerSelect}
                onNext={handleNextQuestion}
                onPrevious={handlePreviousQuestion}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === questions.length - 1}
              />
            )}
            
            {quizFinished && (
              <Results 
                results={results} 
                parties={parties}
                onReset={handleResetQuiz} 
              />
            )}
          </main>
          
          <footer className="bg-white mt-auto">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} VotóMEMEtro | 
                Este projecto é apenas educativo e não recolhe dados pessoais
              </p>
            </div>
          </footer>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
