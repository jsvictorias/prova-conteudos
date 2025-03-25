import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { type RouterLoadingHandler } from '@/hooks/use-router-progress-handler/props';

const extractImageUrl = (backgroundImage: string): string => {
  return backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
};

export const useRouterLoadingHandler: RouterLoadingHandler = () => {
  const [percentage, setPercentage] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    handleRouteChangeComplete();

    return () => {
      handleRouteChangeStart();
    };
  }, [pathname, searchParams]);

  const handleRouteChangeStart = (): void => {
    setPercentage(0);
  };

  const handleRouteChangeComplete = (): void => {
    const images = document.querySelectorAll<HTMLImageElement>('img[loading="eager"]');
    // const videos = document.querySelectorAll<HTMLVideoElement>('video:not(.lazy)');
    const fonts = document.querySelectorAll<HTMLStyleElement>('link[rel=stylesheet]');
    const backgrounds = getBackgroundImages();

    const mediaCount = images.length /*+ videos.length */ + fonts.length + backgrounds.length;

    if (mediaCount === 0) {
      setPercentage(1);
    }
    let loadedMedia = 0;

    const onLoadMedia = (): void => {
      loadedMedia++;
      setPercentage(loadedMedia / mediaCount);
    };

    images.forEach(image => {
      if (image.complete) {
        onLoadMedia();
      } else {
        image.addEventListener('load', onLoadMedia);
      }
    });

    // videos.forEach(video => {
    //   if (video.readyState >= 3) {
    //     onLoadMedia();
    //   } else {
    //     video.addEventListener('canplaythrough', onLoadMedia);
    //   }
    // });

    fonts.forEach(font => {
      if (font.sheet) {
        onLoadMedia();
      } else {
        font.addEventListener('load', onLoadMedia);
      }
    });

    backgrounds.forEach(bg => {
      const img = new Image();
      img.src = extractImageUrl(bg);

      if (img.complete) {
        onLoadMedia();
      } else {
        img.addEventListener('load', onLoadMedia);
      }
    });
  };

  const getBackgroundImages = (): string[] => {
    const array: string[] = [];
    const backgroundImages = document.querySelectorAll<HTMLElement>('[data-lazy="false"]');

    backgroundImages.forEach(bg => {
      const urls = [
        bg.style.backgroundImage,
        window.getComputedStyle(bg, ':before').backgroundImage,
        window.getComputedStyle(bg, ':after').backgroundImage
      ];

      urls.forEach(url => {
        if (!url || url === 'none') {
          return;
        }

        array.push(extractImageUrl(url));
      });
    });

    return array;
  };

  return percentage;
};
