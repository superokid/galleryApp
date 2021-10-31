import React from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

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

const anyAsyncStorage = {
  getItem: (key: string) =>
    AsyncStorage.getItem(key).then(str => JSON.parse(str || '')),
  setItem: (key: string, value: any) =>
    AsyncStorage.setItem(key, JSON.stringify(value)),
  delayInit: true,
};

const appSettingsAtom = atomWithStorage('bookmarks', [], anyAsyncStorage);

const BookmarkStore: React.FC<Props> = ({ id, children }) => {
  const [bookmarks, setBookmark] = useAtom(appSettingsAtom);

  const isBookmarked = bookmarks.some((item: ArtWork) => item.id === id);

  const injectProps = {
    isBookmarked,
    data: bookmarks,
    onBookmark: (apiData?: ArtWork) => {
      if (!apiData) {
        return;
      }
      if (isBookmarked) {
        const nextValue = bookmarks.filter((item: ArtWork) => item.id !== id);
        setBookmark(nextValue);
      } else {
        // data not exist add
        const nextValue = [...bookmarks, apiData];
        setBookmark(nextValue);
        if (!nextValue.length) {
          FastImage.clearDiskCache();
        }
      }
    },
  };
  return typeof children === 'function' ? children(injectProps) : children;
};

export default BookmarkStore;
