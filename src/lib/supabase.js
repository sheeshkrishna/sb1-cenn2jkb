import { createClient } from '@supabase/supabase-js'

const supabaseUrl    = 'https://bnxarztuttbjvjkypnde.supabase.co'
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJueGFyenR1dHRianZqa3lwbmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNzE4OTAsImV4cCI6MjA3Mzc0Nzg5MH0.Hp9HqTnBfGa_R8ypOJ-YxnC424OvEcYirgdqXXspTtY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
