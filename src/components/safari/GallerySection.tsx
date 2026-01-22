const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    alt: "Desert sunset",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&h=300&fit=crop",
    alt: "Dune bashing",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop",
    alt: "Camel caravan",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=300&fit=crop",
    alt: "Desert camp",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300&fit=crop",
    alt: "Night sky",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&h=400&fit=crop",
    alt: "Desert adventure",
    span: "col-span-2",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Capture the Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Glimpses of extraordinary moments from our desert adventures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden rounded-lg group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
