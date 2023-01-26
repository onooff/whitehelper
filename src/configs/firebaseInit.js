import { initializeApp } from 'firebase/app';

export default function firebaseInit() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCtLJ9iC7vxA6YjtQmKwvz8BjZeKIuS6zg',
    authDomain: 'whitehelper-project.firebaseapp.com',
    projectId: 'whitehelper-project',
    storageBucket: 'whitehelper-project.appspot.com',
    messagingSenderId: '37267962166',
    appId: '1:37267962166:web:6947bc0dd78d65dae4db97',
    measurementId: 'G-0KPKQT02RJ',
  };

  return initializeApp(firebaseConfig);
}
