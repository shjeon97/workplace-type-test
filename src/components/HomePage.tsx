import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Target, TrendingUp, Clock } from 'lucide-react';

interface HomePageProps {
  onStartTest: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartTest }) => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: '정확한 분석',
      description: '과학적 근거를 바탕으로 한 신뢰할 수 있는 성격 분석'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '직장 맞춤형',
      description: '업무 환경에 특화된 4가지 성격 유형 분류'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '성장 가이드',
      description: '개인 발전을 위한 구체적인 개발 방향 제시'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '빠른 진단',
      description: '5분 내외의 간단한 테스트로 빠른 결과 확인'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-8xl mb-6"
          >
            🏢
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">직장인 성격 유형</span>
            <br />
            <span className="text-gray-800 dark:text-gray-100">테스트</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            나는 어떤 유형의 직장인일까?<br />
            나만의 업무 스타일과 강점을 발견해보세요
          </p>
          
          <motion.button
            onClick={onStartTest}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto whitespace-nowrap"
          >
            <Play className="w-6 h-6 mr-3" />
            테스트 시작하기
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="card bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <h2 className="text-3xl font-bold mb-6">
              🎯 어떤 결과를 얻을 수 있나요?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">💪 개인 강점 분석</h4>
                <p className="opacity-90">당신만의 고유한 강점과 능력을 발견</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚡ 업무 스타일 파악</h4>
                <p className="opacity-90">효과적인 업무 방식과 선호도 이해</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 적합한 역할 추천</h4>
                <p className="opacity-90">나에게 맞는 직무와 포지션 안내</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 성장 방향 제시</h4>
                <p className="opacity-90">개인 발전을 위한 구체적인 가이드</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            지금 바로 시작해서 나만의 직장인 성격 유형을 알아보세요!
          </p>
          <motion.button
            onClick={onStartTest}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-3 rounded-full flex items-center justify-center mx-auto whitespace-nowrap"
          >
            무료로 테스트 시작 →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;