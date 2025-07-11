// import { client } from "@repo/db/client";

// export default async function Home() {
//   const user = await client.user.findFirst();
//   return <div>{user?.username}</div>;
// }
import { client } from "@repo/db/client";

export default async function Home() {
  try {
    const user = await client.user.findFirst();
    console.log("User data:", user); // Debug log
    
    if (!user) {
      return <div>No user found</div>;
    }
    
    return (
      <div>
        <p>User ID: {user.id}</p>
        <p>Username: {user.username || "No username set"}</p>
      </div>
    );
  } catch (error) {
    console.error("Database error:", error);
    return <div>Error loading user</div>;
  }
}