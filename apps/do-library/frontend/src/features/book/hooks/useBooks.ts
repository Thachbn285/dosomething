import { useState, useEffect } from 'react';
import { Book } from '../types';
import { getBooks } from '../services/book.service';

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks().then(data => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  return { books, loading };
}
