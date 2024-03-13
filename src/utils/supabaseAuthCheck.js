import supabase from "@/supabase/supabase";

export async function fetcher () {
    // Retrieve user data from Supabase
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return { user: user };
};
