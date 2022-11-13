import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://pormkfoqvlqrumeitkom.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcm1rZm9xdmxxcnVtZWl0a29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODQxNzYsImV4cCI6MTk4Mzg2MDE3Nn0.7zBg9d7xOVDP7QDXogFAy24KLYdtxxv0h2HbHD4eW0U";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}