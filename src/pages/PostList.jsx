import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from API
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Filter posts based on query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Public Posts (API)</h2>
      <Input
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && filteredPosts.length === 0 && (
        <p>No matching posts found.</p>
      )}

      <div className="space-y-3">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="p-4">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
