// Pomocniczy skrypt do generowania obiektów galerii
const imageIndices = Array.from({ length: 9 }, (_, i) => i + 1);

export const galleryImages = imageIndices.map((idx) => ({
  // Upewnij się, że rozszerzenie (.jpeg) zgadza się z Twoimi plikami w folderze public
  original: `/images/gallery/img${idx}.jpeg`, 
  thumbnail: `/images/gallery/img${idx}.jpeg`,
  loading: 'lazy',
  description: `Universal Express Relocations Image ${idx}`,
}));