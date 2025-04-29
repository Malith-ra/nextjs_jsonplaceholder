import { Post, User, Comment } from '@/types';

export default async function PostsPage() {
  const postsRes = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
  );
  const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
  const commentsRes = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
  );

  const posts = await postsRes.json();
  const users = await usersRes.json();
  const comments = await commentsRes.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post: Post) => {
        const author = users.find((u: User) => u.id === post.userId);
        const postComments = comments.filter(
          (c: Comment) => c.postId === post.id,
        );

        return (
          <div key={post.id} className="mb-6 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">Author: {author?.name}</p>
            <p className="mt-2">{post.body}</p>
            <div className="mt-3">
              <h3 className="font-medium">Comments:</h3>
              <ul className="list-disc pl-6">
                {postComments.slice(0, 3).map((comment: Comment) => (
                  <li key={comment.id}>
                    <p className="text-sm">{comment.body}</p>
                    <span className="text-xs text-gray-500">
                      – {comment.email}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
