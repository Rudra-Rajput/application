import { useRouter } from 'expo-router';
import React from 'react';
// import ProfileDetails from './screens/ProfileDetails';
import SplashScreen from './SplashScreen';

export default function AppEntry() {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
      // router.replace('/auth/onboarding/terms-and-condition');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreen />;
  // return <ProfileDetails />;
  // return <Settings />;
}

export const options = {
  headerShown: false,
}; 