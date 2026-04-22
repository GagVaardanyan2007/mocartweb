import React from 'react';

export default function News() {
  // Данные одной новости
  const news = {
    title: "Запуск нового функционала",
    date: "15 марта 2024",
    description: "Мы рады представить обновлённую платформу с расширенными возможностями для наших пользователей. Теперь доступны новые инструменты для аналитики, улучшенная система безопасности и интуитивно понятный интерфейс. Это важный шаг в развитии нашего проекта, и мы благодарны всем пользователям за поддержку и обратную связь.",
    image: "https://picsum.photos/500/300",
    icon: "🚀",
    badge: "Новинка"
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#4a2c14] to-[#2e1808] border-amber-500/30 text-white p-5 rounded-xl shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Левая сторона - текст */}
        <div className="flex-1 lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl transition-transform duration-300 hover:scale-110 hover:rotate-3">
              {news.icon}
            </div>
            <span className="px-2 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
              {news.badge}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
            {news.title}
          </h1>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>📅</span>
            <span>{news.date}</span>
          </div>
          
          <p className="text-gray-200 leading-relaxed text-lg mb-6">
            {news.description}
          </p>
          
          <button className="px-6 py-2 text-sm font-medium text-amber-300 border border-amber-500/50 rounded-lg transition-all duration-300 hover:bg-amber-500/20 hover:scale-105">
            Назад к новостям
          </button>
        </div>

        {/* Правая сторона - картинка */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-lg transition-all duration-300 hover:shadow-amber-500/20 hover:scale-[1.02]">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}