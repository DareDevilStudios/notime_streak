import supabase from "@/supabase/supabase";

export async function fetcher () {
    // Retrieve user data from Supabase
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return { user: user };
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
