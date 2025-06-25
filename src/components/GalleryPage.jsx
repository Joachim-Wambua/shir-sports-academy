import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";

const GalleryPage = () => {
  const galleryItems = [
    {
      type: "image",
      src: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1750070291/photo-3_yr7egw.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1750070279/photo-6_juxpzy.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1750070273/photo-2_nlay6m.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1750070287/photo-1_qholsq.jpg",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1750070281/photo-5_n2w8fx.jpg",
    },
    { type: "video", src: "/gallery/video2.mp4" },
  ];

  return (
    <div>
      <GalleryHero />
      <GalleryGrid items={galleryItems} />
    </div>
  );
};

export default GalleryPage;
