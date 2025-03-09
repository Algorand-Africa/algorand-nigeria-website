import { GalleryImage } from '@/interface/event.interface';

export const splitImages = (
  images: GalleryImage[],
): { column1: GalleryImage[]; column2: GalleryImage[] } => {
  const column1: GalleryImage[] = [];
  const column2: GalleryImage[] = [];

  images.forEach((image, index) => {
    if (index % 2 === 0) {
      column1.push(image);
    } else {
      column2.push(image);
    }
  });

  return { column1, column2 };
};

export const organizeImages = (images: GalleryImage[]): GalleryImage[] => {
  const result: GalleryImage[] = [];
  let i = 0;

  while (i < images.length) {
    const currentImage = images[i];

    if (currentImage.fullWidth) {
      // If image is already full width, add it directly
      result.push(currentImage);
      i++;
    } else {
      // Look for next non-full width image to pair with
      const nextImage = images[i + 1];

      if (nextImage && !nextImage.fullWidth) {
        // Found a pair of non-full width images
        result.push(currentImage, nextImage);
        i += 2;
      } else {
        // No pair found, convert to full width
        result.push({ ...currentImage, fullWidth: true });
        i++;
      }
    }
  }

  return result;
};

export const formatImages = (
  images: GalleryImage[],
): {
  column1: GalleryImage[];
  column2: GalleryImage[];
  spillOver: GalleryImage[];
} => {
  const { column1: column1Unorganized, column2: column2Unorganized } = splitImages(images);
  const column1 = organizeImages(column1Unorganized);
  const column2 = organizeImages(column2Unorganized);

  const getRowCount = (images: GalleryImage[]): number => {
    let rows = 0;
    let i = 0;

    while (i < images.length) {
      if (images[i].fullWidth) {
        rows++;
        i++;
      } else {
        // Non-full width images come in pairs
        rows++;
        i += 2;
      }
    }
    return rows;
  };

  const column1Rows = getRowCount(column1);
  const column2Rows = getRowCount(column2);

  if (column1Rows === column2Rows) {
    return { column1, column2, spillOver: [] };
  }

  const targetRows = Math.min(column1Rows, column2Rows);
  const spillOver: GalleryImage[] = [];

  // Process the longer column to extract spillover images
  const processColumn = (images: GalleryImage[]): GalleryImage[] => {
    let rows = 0;
    let i = 0;
    const balanced: GalleryImage[] = [];

    while (i < images.length && rows < targetRows) {
      if (images[i].fullWidth) {
        balanced.push(images[i]);
        i++;
        rows++;
      } else {
        // Handle pair of non-full width images
        balanced.push(images[i]);
        if (i + 1 < images.length && !images[i + 1].fullWidth) {
          balanced.push(images[i + 1]);
        }
        i += 2;
        rows++;
      }
    }

    // Add remaining images to spillover
    while (i < images.length) {
      spillOver.push(images[i]);
      i++;
    }

    return balanced;
  };

  const balancedColumn1 = column1Rows > targetRows ? processColumn(column1) : column1;
  const balancedColumn2 = column2Rows > targetRows ? processColumn(column2) : column2;

  return {
    column1: balancedColumn1,
    column2: balancedColumn2,
    spillOver,
  };
};
