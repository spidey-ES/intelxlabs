'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: { name: string };
  location: { name: string };
  image: string;
}

interface ApiResponse {
  info: {
    next: string | null;
  };
  results: Character[];
}

async function fetchCharacters({
  pageParam = 'https://rickandmortyapi.com/api/character',
}): Promise<ApiResponse> {
  const res = await fetch(pageParam);
  return res.json();
}

export default function RickAndMortyCards() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ApiResponse>({
      queryKey: ['characters'],
      queryFn: fetchCharacters,
      getNextPageParam: (lastPage) => lastPage.info.next ?? undefined,
    });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer to trigger fetchNextPage
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

  if (status === 'loading')
    return <p className='text-center text-gray-400'>Loading...</p>;
  if (status === 'error')
    return <p className='text-center text-red-500'>Error fetching data</p>;

  return (
    <div className='min-h-screen bg-gray-900 text-white p-6'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Rick & Morty Characters (Infinite Scroll)
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data?.pages.map((page, i) =>
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

      {/* Loader for infinite scroll */}
      <div ref={loadMoreRef} className='text-center py-6'>
        {isFetchingNextPage ? (
          <p className='text-gray-400'>Loading more...</p>
        ) : hasNextPage ? (
          <p className='text-gray-400'>Scroll to load more...</p>
        ) : (
          <p className='text-gray-500'>No more characters </p>
        )}
      </div>
    </div>
  );
}
