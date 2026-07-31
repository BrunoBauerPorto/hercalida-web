import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Suas chaves reais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBo6KSBM8RPPRjZIIPQXYPxBvzg5hqUUAk",
  authDomain: "hercalida-landing-page.firebaseapp.com",
  projectId: "hercalida-landing-page",
  storageBucket: "hercalida-landing-page.firebasestorage.app",
  messagingSenderId: "480932780145",
  appId: "1:480932780145:web:4696376b30cebcd148e3d0",
  measurementId: "G-156NYBBMEQ"
};

// Inicializa o Firebase de forma segura para o Next.js (evita erro de app duplicado)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa e exporta o Banco de Dados (Firestore)
export const db = getFirestore(app);