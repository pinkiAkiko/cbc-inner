import { useState } from "react";
import { X, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MediaItem {
  type: "image" | "video";
  url: string;
  caption: string;
  date?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

const MediaGallery = ({ items }: MediaGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const images = items.filter((item) => item.type === "image");
  const videos = items.filter((item) => item.type === "video");

  return (
    <div className="space-y-8">
      {/* Photos */}
      {images.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Video Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((item, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.url}/maxresdefault.jpg`}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-accent-foreground ml-1" size={28} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                  {item.date && <p className="text-white/80 text-xs">{item.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedItem?.type === "image" ? (
            <div className="relative">
              <img
                src={selectedItem.url}
                alt={selectedItem.caption}
                className="w-full h-auto"
              />
              <div className="p-4 bg-muted">
                <p className="font-medium">{selectedItem.caption}</p>
                {selectedItem.date && (
                  <p className="text-sm text-muted-foreground">{selectedItem.date}</p>
                )}
              </div>
            </div>
          ) : selectedItem?.type === "video" ? (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedItem.url}`}
                title={selectedItem.caption}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <p className="text-xs text-muted-foreground text-center italic">
        All visuals are captured from field visits and CBC-led training programs.
      </p>
    </div>
  );
};

export default MediaGallery;
