import React from 'react';
import { motion } from 'framer-motion';
import { TestResult } from '../types';
import { getPersonalityTypeInfo } from '../utils/testCalculator';
import { Share2, Download, RefreshCw } from 'lucide-react';

interface ResultCardProps {
  result: TestResult;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  const typeInfo = getPersonalityTypeInfo(result.primaryType);

  const handleShare = async () => {
    const shareData = {
      title: '직장인 성격 유형 테스트 결과',
      text: `나의 직장인 성격 유형은 "${typeInfo.name}" 입니다! ${typeInfo.description}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert('결과가 클립보드에 복사되었습니다!');
    }
  };

  const handleDownload = () => {
    const resultText = `
직장인 성격 유형 테스트 결과

성격 유형: ${typeInfo.name} ${typeInfo.icon}
설명: ${typeInfo.description}

주요 강점:
${result.strengths.map(strength => `• ${strength}`).join('\n')}

업무 스타일:
${result.workStyle.map(style => `• ${style}`).join('\n')}

이상적인 역할:
${result.idealRole.map(role => `• ${role}`).join('\n')}

개발 영역:
${result.developmentAreas.map(area => `• ${area}`).join('\n')}
    `;

    const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `직장인_성격유형_${typeInfo.name}_결과.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Main Result Card */}
      <div className="card text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <div 
            className="text-8xl mb-4"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
          >
            {typeInfo.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: typeInfo.color }}>
            {typeInfo.name}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {typeInfo.description}
          </p>
        </motion.div>
        
        {/* Background decoration */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            background: `radial-gradient(circle, ${typeInfo.color} 0%, transparent 70%)` 
          }}
        />
      </div>

      {/* Detailed Results */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">💪 주요 강점</h3>
          <ul className="space-y-2">
            {result.strengths.map((strength, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                {strength}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4 text-secondary-700 dark:text-secondary-400">⚡ 업무 스타일</h3>
          <ul className="space-y-2">
            {result.workStyle.map((style, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">→</span>
                {style}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">🎯 이상적인 역할</h3>
          <ul className="space-y-2">
            {result.idealRole.map((role, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-green-500 dark:text-green-400 mr-2">●</span>
                {role}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-400">📈 개발 영역</h3>
          <ul className="space-y-2">
            {result.developmentAreas.map((area, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">↗</span>
                {area}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button
          onClick={handleShare}
          className="btn-primary flex items-center gap-2"
        >
          <Share2 size={20} />
          결과 공유하기
        </button>
        <button
          onClick={handleDownload}
          className="btn-secondary flex items-center gap-2"
        >
          <Download size={20} />
          결과 저장하기
        </button>
        <button
          onClick={onRestart}
          className="btn-secondary flex items-center gap-2"
        >
          <RefreshCw size={20} />
          다시 테스트하기
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;