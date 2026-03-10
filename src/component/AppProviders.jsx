// src/component/AppProviders.jsx
'use client'; // <-- This is where 'use client' belongs!

import { useEffect, useState } from 'react';

export default function AppProviders({ children }) {
  // Client-side logic for checking if the component has mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use this to prevent rendering client-dependent UI until hydration is complete
  if (!mounted) {
    return null; // or a simple loading skeleton
  }

  // Once mounted, render the rest of your app (the children)
  return <>{children}</>;
}