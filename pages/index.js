import { useState } from 'react';
import { Inter } from 'next/font/google'
import CourtyardCurios from '%/Courtyard';
import FarmestedCurios from '%/Farmsted'; 
import Chatbot from '%/Chatbot';
import DarkestDungeonCurios from '%/DarkestDungeonCurios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Chatbot />
}
