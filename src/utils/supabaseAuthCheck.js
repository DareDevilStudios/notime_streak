  import supabase from "@/supabase/supabase";
  import axios from "axios";
import { data } from "autoprefixer";

  export async function fetcher () {
      // Retrieve user data from Supabase
      const {
        data: { user },
      } = await supabase.auth.getUser();
console.log(user?.user_metadata)

const postData = {
  userName: user.user_metadata.full_name,
  userEmail: user.user_metadata.email,
  userImageUrl:user.user_metadata.avatar_url
};
console.log(postData)

try {
  const response = await axios.post('http://localhost:3000/api/users', postData);
  console.log(response.data);
  return { user: user };
} catch (error) {
  console.error(error);
  return { error: 'An error occurred while calling the API' };
}

   
  };

  export async function handleSignInWithGoogle(response) {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) {
        console.error("Error signing in with Google:", error.message);
        return;
      }

      console.log("User:", user);
      console.log("Session:", session);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  }


