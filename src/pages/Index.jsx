import React from 'react';
import CatHero from '../components/CatHero';
import CatInfo from '../components/CatInfo';
import FunFactCard from '../components/FunFactCard';
import { useQuery } from '@tanstack/react-query';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const Index = () => {
  const { data: catFact, isLoading, error } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <CatHero />
      <div className="container mx-auto px-4 py-8">
        <CatInfo />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Fun Cat Fact</h2>
          {isLoading ? (
            <div className="animate-pulse bg-white rounded-lg p-4 shadow-md">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ) : error ? (
            <p className="text-red-500">Failed to load cat fact. Please try again later.</p>
          ) : (
            <FunFactCard fact={catFact.fact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;