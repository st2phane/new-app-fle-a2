/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { VocabularyViewer } from './components/VocabularyViewer';
import { GrammarViewer } from './components/GrammarViewer';
import { ExercisesModule } from './components/ExercisesModule';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { JobOfferLetterModule } from './components/JobOfferLetterModule';
import { QuizModule } from './components/QuizModule';
import { ProgressDashboard } from './components/ProgressDashboard';
import { loadUserStats } from './utils/storage';
import { UserStats } from './types/fle';
import { 
  Store, 
  HeartPulse, 
  GraduationCap, 
  HardHat, 
  Building2, 
  ArrowRight,
  Sparkles,
  Utensils,
  HeartHandshake,
  FileText,
  BookOpen,
  PenTool,
  MessageSquare,
  Briefcase,
  Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('vocabulaire');
  const [stats, setStats] = useState<UserStats>(loadUserStats());
  const [showHeroBanner, setShowHeroBanner] = useState(true);

  // Sync state changes from storage
  const handleUpdateStats = (newStats: UserStats) => {
    setStats(newStats);
  };

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroImagePath = '/src/assets/images/hero_fle_adults_1794128066717.jpg';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} stats={stats} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">
        {/* Welcome Hero Spotlight for adult learners */}
        {showHeroBanner && activeTab === 'vocabulaire' && (
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-md border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px]">
              {/* Left Column: Educational Editorial Pitch */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
                    <span>Formation FLE Adultes</span>
                    <span aria-hidden="true">·</span>
                    <span>Niveau CECRL A2</span>
                    <span aria-hidden="true">·</span>
                    <span>Insertion & Emploi</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Révisez votre français pour le travail et le quotidien
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    Accédez directement aux <strong className="text-white">6 modules de formation</strong> pour progresser à votre rythme :
                  </p>
                </div>

                {/* Clickable Modules Showcase inside the Introduction */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      const vocabSection = document.querySelector('main > div:nth-of-type(2)');
                      if (vocabSection) {
                        vocabSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        handleSelectTab('vocabulaire');
                      }
                    }}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/25 text-indigo-300 group-hover:text-white shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Vocabulaire</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        Définitions en QCM avec phrases de contexte et audio
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectTab('grammaire')}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/25 text-emerald-300 group-hover:text-white shrink-0">
                      <FileText size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Grammaire</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        9 fiches A2 essentielles et 7 exercices par thème
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectTab('exercices')}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/25 text-amber-300 group-hover:text-white shrink-0">
                      <PenTool size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Exercices</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        Phrases à compléter, ordre des mots et associations
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectTab('scenarios')}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/25 text-sky-300 group-hover:text-white shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Situations</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        6 consignes de poste et 3 dialogues par métier
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectTab('offres')}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-rose-500/25 text-rose-300 group-hover:text-white shrink-0">
                      <Briefcase size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Offres d’emploi</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        Annonces, synonymes et atelier lettre de motivation
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectTab('quiz')}
                    className="group text-left p-3 rounded-xl bg-white/10 hover:bg-indigo-600/80 border border-white/15 hover:border-indigo-400 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-violet-500/25 text-violet-300 group-hover:text-white shrink-0">
                      <Award size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm sm:text-base font-bold text-white">Quiz</span>
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 group-hover:text-indigo-100 line-clamp-1">
                        Bilan A2 chronométré ou libre pour tester vos acquis
                      </p>
                    </div>
                  </button>
                </div>

                {/* 7 Requested Job Disciplines Highlights + Hide toggle */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-400">
                      7 filières professionnelles intégrées :
                    </span>
                    <button
                      onClick={() => setShowHeroBanner(false)}
                      className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-2 transition-colors"
                    >
                      Masquer cette présentation
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs font-medium text-slate-200">
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <Utensils size={13} className="text-amber-400" />
                      <span>Restauration (Traditionnelle & Collective)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <HeartHandshake size={13} className="text-rose-400" />
                      <span>Service à la personne & Entretien</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <Store size={13} className="text-emerald-400" />
                      <span>Commerce & Libre-service</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <HeartPulse size={13} className="text-red-400" />
                      <span>Santé & Soins</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <GraduationCap size={13} className="text-teal-400" />
                      <span>Périscolaire & Enfance</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <HardHat size={13} className="text-orange-400" />
                      <span>BTP & Bâtiment</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md">
                      <Building2 size={13} className="text-blue-400" />
                      <span>Secrétariat & Accueil</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Editorial Photo */}
              <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
                <img
                  src={heroImagePath}
                  alt="Apprenants adultes dans un atelier de français professionnel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Tab Content */}
        {activeTab === 'vocabulaire' && (
          <VocabularyViewer
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {activeTab === 'grammaire' && (
          <GrammarViewer
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {activeTab === 'exercices' && (
          <ExercisesModule
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {activeTab === 'scenarios' && (
          <ScenarioSimulator
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {activeTab === 'offres' && (
          <JobOfferLetterModule
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizModule
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onOpenDashboard={() => handleSelectTab('dashboard')}
          />
        )}

        {activeTab === 'dashboard' && (
          <ProgressDashboard
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onNavigateTab={handleSelectTab}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700 dark:text-slate-200">FLE Pro A2</span>
            <span aria-hidden="true">·</span>
            <span>Conforme au Cadre Européen Commun de Référence pour les Langues (CECRL)</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleSelectTab('vocabulaire')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Vocabulaire
            </button>
            <button
              onClick={() => handleSelectTab('grammaire')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Grammaire (63 exercices)
            </button>
            <button
              onClick={() => handleSelectTab('scenarios')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Consignes de poste
            </button>
            <button
              onClick={() => handleSelectTab('offres')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-indigo-600 dark:text-indigo-400"
            >
              Offres & Lettre
            </button>
            <button
              onClick={() => handleSelectTab('quiz')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Quiz
            </button>
            <button
              onClick={() => handleSelectTab('dashboard')}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Mon Suivi
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
