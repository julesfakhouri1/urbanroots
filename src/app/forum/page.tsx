"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Comment {
  _id: string;
  content: string;
  author: string;
  createdAt: string;
}

interface Thread {
  _id: string;
  title: string;
  content: string;
  author: string;
  category: { _id: string; name: string };
  createdAt: string;
  comments?: Comment[];
}

const ForumPage = () => {
  const { data: session } = useSession();
  const [threads, setThreads] = useState<Thread[]>([]);
  const [categories, setCategories] = useState<Array<{ _id: string; name: string }>>([]);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadContent, setNewThreadContent] = useState('');
  const [newThreadCategory, setNewThreadCategory] = useState('');
  const [newComment, setNewComment] = useState('');
  const [commentingThreadId, setCommentingThreadId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');


  useEffect(() => {
    fetchThreads();
    fetchCategories();
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await fetch('/api/forum/threads');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Threads récupérés:', data); // Pour le débogage
      setThreads(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des threads:', error);
    }
  };
  
  

  const fetchCategories = async () => {
    const response = await fetch('/api/forum/categories');
    const data: Array<{ _id: string; name: string }> = await response.json();
    setCategories(data);
  };

  const handleNewThreadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      alert("Vous devez être connecté pour créer un thread.");
      return;
    }
    const response = await fetch('/api/forum/threads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newThreadTitle,
        content: newThreadContent,
        category: newThreadCategory,
        author: session.user?.name,
        comments: [] 
      }),
    });
    if (response.ok) {
      setNewThreadTitle('');
      setNewThreadContent('');
      setNewThreadCategory('');
      fetchThreads();
    }
  };
  

  const handleNewCommentSubmit = async (e: React.FormEvent, threadId: string) => {
    e.preventDefault();
    if (!session) {
      alert("Vous devez être connecté pour commenter.");
      return;
    }
    try {
      const response = await fetch(`/api/forum/threads/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          threadId, 
          content: newComment,
          author: session.user?.name
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'ajout du commentaire');
      }
  
      const newCommentData = await response.json();
      console.log('Nouveau commentaire ajouté:', newCommentData);
  
      setThreads(prevThreads => prevThreads.map(thread => 
        thread._id === threadId 
          ? { ...thread, comments: [...(thread.comments || []), newCommentData] }
          : thread
      ));
      setNewComment('');
      setCommentingThreadId(null);
      await fetchThreads(); // Rafraîchir tous les threads
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
      alert('Une erreur est survenue lors de l\'ajout du commentaire. Veuillez réessayer.');
    }
  };
  
  
  

  const sortThreadsByCategory = (threads: Thread[]): Record<string, Thread[]> => {
    return threads.reduce((acc, thread) => {
      if (!acc[thread.category._id]) {
        acc[thread.category._id] = [];
      }
      acc[thread.category._id].push(thread);
      return acc;
    }, {} as Record<string, Thread[]>);
  };

  const filteredThreads = selectedCategory === 'all' 
    ? threads 
    : threads.filter(thread => thread.category._id === selectedCategory);

    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-b from-primary-50 to-primary-100 min-h-screen">
          <div className="container mx-auto p-6">
            <main className="mt-8">
              <h1 className="text-4xl font-bold mb-8 text-primary-800 text-center">Forum Communautaire</h1>
              
              {/* Filtre par catégorie */}
              <div className="mb-8">
                <label htmlFor="category-filter" className="block text-primary-700 font-semibold mb-2">
                  Filtrer par catégorie:
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-primary-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Toutes les catégories</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
    
              {/* Formulaire de création de sujet */}
              {session ? (
                <form onSubmit={handleNewThreadSubmit} className="mb-10 bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4 text-primary-700">Créer un nouveau sujet</h2>
                  <input
                    type="text"
                    value={newThreadTitle}
                    onChange={(e) => setNewThreadTitle(e.target.value)}
                    placeholder="Titre du sujet"
                    className="border border-primary-300 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <textarea
                    value={newThreadContent}
                    onChange={(e) => setNewThreadContent(e.target.value)}
                    placeholder="Contenu du sujet"
                    className="border border-primary-300 p-3 rounded-md w-full mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <select
                    value={newThreadCategory}
                    onChange={(e) => setNewThreadCategory(e.target.value)}
                    className="border border-primary-300 p-3 rounded-md w-full mb-6 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition duration-300 ease-in-out">
                    Créer le sujet
                  </button>
                </form>
              ) : (
                <p className="text-red-500 bg-red-100 p-4 rounded-md mb-8 text-center">
                  Connectez-vous pour créer un nouveau sujet ou commenter.
                </p>
              )}
    
              {/* Liste des sujets */}
              <div>
                {selectedCategory === 'all' ? (
                  categories.map(category => {
                    const categoryThreads = sortThreadsByCategory(filteredThreads)[category._id] || [];
                    return (
                      <div key={category._id} className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-primary-700">{category.name}</h2>
                        {categoryThreads.map(thread => (
                          <div key={thread._id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-bold text-primary-800 mb-2">{thread.title}</h3>
                            <p className="text-primary-600 mb-4">Par {thread.author} le {new Date(thread.createdAt).toLocaleDateString()}</p>
                            <p className="mt-2 text-gray-700">{thread.content}</p>
                            <h4 className="font-semibold mt-6 mb-4 text-primary-700">Commentaires:</h4>
                            {thread.comments && thread.comments.length > 0 ? (
                              thread.comments.map((comment, index) => (
                                <div key={comment._id || `comment-${index}`} className="border-t border-primary-200 mt-4 pt-4">
                                  <p className="text-gray-700">{comment.content}</p>
                                  <p className="text-primary-600 mt-2">Par {comment.author} le {new Date(comment.createdAt).toLocaleDateString()}</p>
                                </div>
                              ))
                            ) : (
                              <p className="text-gray-500 italic">Aucun commentaire pour le moment.</p>
                            )}
                            {session && (
                              commentingThreadId === thread._id ? (
                                <form onSubmit={(e) => handleNewCommentSubmit(e, thread._id)} className="mt-6">
                                  <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Votre commentaire"
                                    className="border border-primary-300 p-3 rounded-md w-full mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                  />
                                  <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition duration-300 ease-in-out">
                                    Poster le commentaire
                                  </button>
                                </form>
                              ) : (
                                <button onClick={() => setCommentingThreadId(thread._id)} className="text-primary-600 hover:text-primary-800 mt-4 transition duration-300 ease-in-out">
                                  Ajouter un commentaire
                                </button>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  })
                ) : (
                  <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-primary-700">
                      {categories.find(cat => cat._id === selectedCategory)?.name || 'Catégorie'}
                    </h2>
                    {filteredThreads.map(thread => (
                      <div key={thread._id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-bold text-primary-800 mb-2">{thread.title}</h3>
                        <p className="text-primary-600 mb-4">Par {thread.author} le {new Date(thread.createdAt).toLocaleDateString()}</p>
                        <p className="mt-2 text-gray-700">{thread.content}</p>
                        <h4 className="font-semibold mt-6 mb-4 text-primary-700">Commentaires:</h4>
                        {thread.comments && thread.comments.length > 0 ? (
                          thread.comments.map((comment, index) => (
                            <div key={comment._id || `comment-${index}`} className="border-t border-primary-200 mt-4 pt-4">
                              <p className="text-gray-700">{comment.content}</p>
                              <p className="text-primary-600 mt-2">Par {comment.author} le {new Date(comment.createdAt).toLocaleDateString()}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 italic">Aucun commentaire pour le moment.</p>
                        )}
                        {session && (
                          commentingThreadId === thread._id ? (
                            <form onSubmit={(e) => handleNewCommentSubmit(e, thread._id)} className="mt-6">
                              <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Votre commentaire"
                                className="border border-primary-300 p-3 rounded-md w-full mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                required
                              />
                              <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition duration-300 ease-in-out">
                                Poster le commentaire
                              </button>
                            </form>
                          ) : (
                            <button onClick={() => setCommentingThreadId(thread._id)} className="text-primary-600 hover:text-primary-800 mt-4 transition duration-300 ease-in-out">
                              Ajouter un commentaire
                            </button>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </>
    );
  }    

export default ForumPage;