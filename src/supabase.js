import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cdbfwghmjbbbrjhhtccy.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkYmZ3Z2htamJiYnJqaGh0Y2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NzQ3ODIsImV4cCI6MjA5MzA1MDc4Mn0.KzQeWdCGgRx2SRQHweHr6I2HWjbQ3xjyu5hNEyRa_f4'

export const supabase = createClient(supabaseUrl, supabaseKey)