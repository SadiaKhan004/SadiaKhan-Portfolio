import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Publications from './components/sections/Publications';
import SparkleCursorTrail from './components/effects/SparkleCursorTrail';
export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] selection:bg-[#ECFDF5] selection:text-[#047857]">
      <Navbar />
      <SparkleCursorTrail />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id='skills'><Skills /></section>
        <section id='experience' ><Experience /></section>
        <section id='projects'><Projects /></section>
        <section id='publications'><Publications /></section>
        <section id='contact'><Contact /></section>
        <section id='footer'><Footer /></section>
      </main>
    </div>
  );
}