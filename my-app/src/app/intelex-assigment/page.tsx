'use client';

import {
  useInfiniteQuery,
  QueryFunctionContext,
  InfiniteData,
} from '@tanstack/react-query';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export interface ApiInfo {
  count: number;  
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: ApiInfo;
  results: Character[];
}

async function fetchCharacters(
  context: QueryFunctionContext
): Promise<ApiResponse> {
  const pageParam =
    typeof context.pageParam === 'string'
      ? context.pageParam
      : 'https://rickandmortyapi.com/api/character';
  const res = await fetch(pageParam);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function RickAndMortyCards() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<
    ApiResponse,
    Error,
    InfiniteData<ApiResponse>,
    [string],
    string
  >({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    getNextPageParam: (lastPage) => lastPage.info.next ?? undefined,
    initialPageParam: 'https://rickandmortyapi.com/api/character',
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  if (!data) return null;

  if (isLoading) return <p className='text-center text-gray-400'>Loading...</p>;
  if (isError)
    return <p className='text-center text-red-500'>Error fetching data</p>;

  return (
    <div className='min-h-screen bg-gray-900 text-white p-6'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Rick & Morty Characters -(Infinite Scroll)
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.pages.map((page) =>
          page.results.map((char) => (
            <div
              key={char.id}
              className='bg-gray-800 rounded-2xl shadow-lg p-4 hover:scale-105 transform transition duration-300'>
              <Image
                src={char.image}
                alt={char.name}
                width={300}
                height={300}
                className='rounded-xl'
              />
              <h2 className='text-xl font-semibold mt-3'>{char.name}</h2>
              <p className='text-sm'>Status: {char.status}</p>
              <p className='text-sm'>Species: {char.species}</p>
              <p className='text-sm'>Origin: {char.origin.name}</p>
              <p className='text-sm'>Location: {char.location.name}</p>
            </div>
          ))
        )}
      </div>

      <div ref={loadMoreRef} className='text-center py-6'>
        {isFetchingNextPage ? (
          <p className='text-gray-400'>Loading more...</p>
        ) : hasNextPage ? (
          <p className='text-gray-400'>Scroll to load more...</p>
        ) : (
          <p className='text-gray-500'>No more characters</p>
        )}
      </div>
    </div>
  );
}
