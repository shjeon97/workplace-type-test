import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import ProgressBar from './components/ProgressBar';
import { TestState, UserResponse, PersonalityType } from './types';
import { questions } from './data/questions';
import { calculateTestResult } from './utils/testCalculator';

enum AppState {
  HOME = 'HOME',
  TEST = 'TEST',
  RESULT = 'RESULT'
}

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [testState, setTestState] = useState<TestState>({
    currentQuestion: 0,
    responses: [],
    isCompleted: false,
    result: null
  });

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('workplace-test-progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.responses.length > 0) {
          setTestState(parsed);
          setAppState(AppState.TEST);
        }
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (testState.responses.length > 0 && !testState.isCompleted) {
      localStorage.setItem('workplace-test-progress', JSON.stringify(testState));
    } else if (testState.isCompleted) {
      localStorage.removeItem('workplace-test-progress');
    }
  }, [testState]);

  const startTest = () => {
    setTestState({
      currentQuestion: 0,
      responses: [],
      isCompleted: false,
      result: null
    });
    setAppState(AppState.TEST);
  };

  const handleAnswerSelect = (answerId: string) => {
    const currentQuestionData = questions[testState.currentQuestion];
    const newResponse: UserResponse = {
      questionId: currentQuestionData.id,
      answerId,
      timestamp: new Date()
    };

    const updatedResponses = [
      ...testState.responses.filter(r => r.questionId !== currentQuestionData.id),
      newResponse
    ];

    setTestState(prev => ({
      ...prev,
      responses: updatedResponses
    }));
  };

  const moveToNextQuestion = () => {
    const nextQuestion = testState.currentQuestion + 1;
    
    if (nextQuestion >= questions.length) {
      // Test completed, calculate result
      const result = calculateTestResult(testState.responses);
      setTestState(prev => ({
        ...prev,
        isCompleted: true,
        result
      }));
      setAppState(AppState.RESULT);
    } else {
      setTestState(prev => ({
        ...prev,
        currentQuestion: nextQuestion
      }));
    }
  };

  const moveToPreviousQuestion = () => {
    if (testState.currentQuestion > 0) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const restartTest = () => {
    localStorage.removeItem('workplace-test-progress');
    setAppState(AppState.HOME);
    setTestState({
      currentQuestion: 0,
      responses: [],
      isCompleted: false,
      result: null
    });
  };

  const currentQuestion = questions[testState.currentQuestion];
  const selectedAnswer = testState.responses.find(r => r.questionId === currentQuestion?.id)?.answerId || null;
  const canProceed = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        {appState === AppState.HOME && (
          <HomePage key="home" onStartTest={startTest} />
        )}

        {appState === AppState.TEST && currentQuestion && (
          <div key="test" className="container mx-auto px-4 py-8">
            <ProgressBar 
              current={testState.currentQuestion + 1} 
              total={questions.length} 
            />
            
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
              questionNumber={testState.currentQuestion + 1}
              totalQuestions={questions.length}
            />

            <div className="flex justify-between max-w-4xl mx-auto mt-8">
              <button
                onClick={moveToPreviousQuestion}
                disabled={testState.currentQuestion === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 이전
              </button>
              
              <button
                onClick={moveToNextQuestion}
                disabled={!canProceed}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {testState.currentQuestion === questions.length - 1 ? '결과 보기' : '다음 →'}
              </button>
            </div>
          </div>
        )}

        {appState === AppState.RESULT && testState.result && (
          <div key="result" className="container mx-auto px-4 py-8">
            <ResultCard 
              result={testState.result}
              onRestart={restartTest}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;