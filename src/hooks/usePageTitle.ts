// usePageTitle.ts
import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title + " | Finance Greeks";
  }, [title]);
};

export default usePageTitle;
