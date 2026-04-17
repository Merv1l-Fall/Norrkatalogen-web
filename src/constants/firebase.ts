
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase/firebase-client';

const imageUrlCache = new Map<string, string>();
const inFlightImageUrlRequests = new Map<string, Promise<string>>();

export const getImageUrl = async (path: string): Promise<string> => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = `Website/${cleanPath}`;

  const cachedUrl = imageUrlCache.get(fullPath);
  if (cachedUrl) return cachedUrl;

  const inFlightRequest = inFlightImageUrlRequests.get(fullPath);
  if (inFlightRequest) return inFlightRequest;

  const request = (async () => {
    try {
      const fileRef = ref(storage, fullPath);
      const url = await getDownloadURL(fileRef);
      imageUrlCache.set(fullPath, url);
      return url;
    } catch (error) {
      console.error('Error getting download URL:', error);
      return '';
    } finally {
      inFlightImageUrlRequests.delete(fullPath);
    }
  })();

  inFlightImageUrlRequests.set(fullPath, request);
  
  return request;
};