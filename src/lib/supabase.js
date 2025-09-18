import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = process.env.SUPABASE_DATABASE_URL
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
