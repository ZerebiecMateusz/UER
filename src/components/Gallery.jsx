import React from "react";
import ImageGallery from "react-image-gallery";
import { useTranslation } from "react-i18next";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/Gallery.css";

// Zakładając, że zdjęcia są w folderze public/images/gallery/
import { galleryImages } from "../data/GalleryData";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section className="gallery-section" id="gallery">
      <h1 className="gallery-title">{t('gallery_title')}</h1>
      
      <div className="gallery-wrapper">
        <ImageGallery 
          items={galleryImages}
          lazyLoad={true}            // Ładuje zdjęcia dopiero przed wyświetleniem
          infinite={true}            // Nieskończona pętla
          showIndex={true}           // Pokazuje np. 1/11
          useBrowserFullscreen={false}
          disableKeyDown={false}     // Pozwala na nawigację strzałkami klawiatury
          
          // Optymalizacja renderowania:
          renderItem={(item) => (
            <div className="image-gallery-image">
              <img
                src={item.original}
                alt={item.description}
                loading="lazy" // Dodatkowe wsparcie dla przeglądarek
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Gallery;