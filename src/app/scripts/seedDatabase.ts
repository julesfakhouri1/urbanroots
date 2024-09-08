import mongoose from 'mongoose';
import Category, { ICategory } from '../models/Category';
import Thread, { IThread } from '../models/Thread';
import dbConnect from '../lib/mongodb';

const categories = [
  { name: 'Jardinage urbain', description: 'Techniques et conseils pour le jardinage en ville' },
  { name: 'Plantes d\'intérieur', description: 'Tout sur l\'entretien des plantes d\'appartement' },
  { name: 'Permaculture', description: 'Principes et pratiques de la permaculture' },
  { name: 'Compostage', description: 'Méthodes et astuces pour un bon compostage' },
  { name: 'Outils de jardinage', description: 'Discussions sur les meilleurs outils pour jardiner' }
];

const threads = [
  {
    title: 'Comment commencer le jardinage urbain ?',
    content: 'Je suis nouveau dans le jardinage urbain et je cherche des conseils pour commencer. Quels sont les premiers pas à suivre ?',
    author: 'Alice',
    category: 'Jardinage urbain',
    comments: [
      { content: 'Bienvenue ! La première étape est de choisir les bonnes plantes.', author: 'Bob' },
      { content: 'Je recommande de commencer par des herbes faciles comme le basilic.', author: 'Charlie' }
    ]
  },
  {
    title: 'Les meilleures plantes d\'intérieur',
    content: 'Quelles sont les meilleures plantes d\'intérieur pour purifier l\'air ?',
    author: 'Dave',
    category: 'Plantes d\'intérieur',
    comments: [
      { content: 'Le lierre est excellent pour purifier l\'air.', author: 'Eve' },
      { content: 'Les plantes araignées sont aussi très efficaces.', author: 'Frank' }
    ]
  }
];

async function seedDatabase() {
  await dbConnect();

  try {
    // Seed categories
    const categoryMap: { [key: string]: mongoose.Types.ObjectId } = {};
    for (const category of categories) {
      const createdCategory = await Category.findOneAndUpdate(
        { name: category.name },
        category,
        { upsert: true, new: true }
      );
      if (createdCategory) {
        categoryMap[category.name] = createdCategory._id;
        console.log(`Category ${category.name} created or updated`);
      }
    }

    // Seed threads
    for (const thread of threads) {
      const categoryId = categoryMap[thread.category];
      if (!categoryId) {
        console.error(`Category ${thread.category} not found`);
        continue;
      }

      const newThread = {
        title: thread.title,
        content: thread.content,
        author: thread.author,
        category: categoryId,
        comments: thread.comments.map(comment => ({
          content: comment.content,
          author: comment.author,
          createdAt: new Date()
        }))
      };

      await Thread.findOneAndUpdate(
        { title: thread.title },
        newThread,
        { upsert: true, new: true }
      );

      console.log(`Thread ${thread.title} created or updated`);
    }

    console.log('Database seeding completed');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDatabase();
