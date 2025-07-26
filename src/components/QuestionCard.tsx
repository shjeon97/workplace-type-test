import React from 'react';
import { motion } from 'framer-motion';
import { Question, Answer } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onAnswerSelect: (answerId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="card max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <div className="text-sm text-gray-500 mb-2">
          질문 {questionNumber} / {totalQuestions}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-4">
        {question.answers.map((answer: Answer, index: number) => (
          <motion.button
            key={answer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onAnswerSelect(answer.id)}
            className={`answer-option ${selectedAnswer === answer.id ? 'selected' : ''}`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-200 ${
                selectedAnswer === answer.id 
                  ? 'border-primary-600 bg-primary-600' 
                  : 'border-gray-300'
              }`}>
                {selectedAnswer === answer.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                )}
              </div>
              <span className="text-left flex-1 leading-relaxed">
                {answer.text}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;