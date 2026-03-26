
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase/firebase-client';

const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true';
const bucketName = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.split('.')[0] || '';

export const getImageUrl = async (path: string): Promise<string> => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = `Website/${cleanPath}`;
  
  try {
    const fileRef = ref(storage, fullPath);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('Error getting download URL:', error);
    return '';
  }
};