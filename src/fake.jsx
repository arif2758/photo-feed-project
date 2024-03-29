const photos = [
    {
      id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
      title: "The Beautiful Nature",
      url: "https://source.unsplash.com/ztpUS4N1xhY",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=53",
        name: "Alex B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220,
      },
      likes: 100,
    },
    {
      id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
      title: "The Beautiful Nature",
      url: "https://source.unsplash.com/mPFSPqZOO7s",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=54",
        name: "Brian Xelo",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220,
      },
      likes: 100,
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://source.unsplash.com/uPEnxrdSKIw",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220,
      },
      likes: 100,
    }]

    const getAllPhotos = () => {
        return photos;
      };

      export { getAllPhotos };

      এখন আমি getAllPhotos কে এমন ভাবে কল করতে চাই যাতে রেটার্ন করা photos এর প্রত্যেকটি এলিমেন্টের শুধু id, title, url এই তিনটা property থাকে। 