// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lxivbqaajspdarbtqupp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aXZicWFhanNwZGFyYnRxdXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMzA1MDEsImV4cCI6MjA2MzkwNjUwMX0.CLMbURp7UnIfUq7bRxHcw1gTaDcpFDCyJZC1qQEEM7M";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);