export const checkImageURL = (url) => {
  if (!url) return false
  
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
