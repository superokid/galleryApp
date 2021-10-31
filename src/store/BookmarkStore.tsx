import React from 'react';
import { atom, useAtom } from 'jotai';
import { ArtWork } from '../config/api';

interface Props {
  id?: number;
  children: React.ReactNode | ((x: InjectProps) => React.ReactNode);
}

interface InjectProps {
  isBookmarked: boolean;
  data: ArtWork[];
  onBookmark: (apiData?: ArtWork) => void;
}

const bookmarksAtom = atom<ArtWork[]>([]);

const BookmarkStore: React.FC<Props> = ({ id, children }) => {
  const [bookmarks, setBookmark] = useAtom(bookmarksAtom);

  const isBookmarked = bookmarks.some(item => item.id === id);

  const injectProps = {
    isBookmarked,
    data: bookmarks,
    onBookmark: (apiData?: ArtWork) => {
      if (!apiData) {
        return;
      }
      if (isBookmarked) {
        setBookmark(bookmarks.filter(item => item.id !== id));
      } else {
        // data not exist add
        setBookmark([...bookmarks, apiData]);
      }
    },
  };
  return typeof children === 'function' ? children(injectProps) : children;
};

export default BookmarkStore;
