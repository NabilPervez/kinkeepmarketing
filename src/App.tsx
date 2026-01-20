// import React from 'react';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { AuroraBackground } from './components/AuroraBackground';
import {
  Shield,
  Download,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Database,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen text-zinc-100 selection:bg-blue-500/30">
      <AuroraBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#1E2130]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ef4444] to-[#4f7cac] rounded-xl flex items-center justify-center font-bold text-lg shadow-lg text-white">K</div>
            <span className="font-display font-bold tracking-tight text-xl text-white">KinKeep</span>
          </div>
          <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="!py-2 !px-4 text-sm rounded-full">
              Beta Access
            </Button>
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">

        {/* Section 1: Hero */}
        <section className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#4f7cac]/10 border border-[#4f7cac]/20 text-[#9eefe5] text-sm font-medium">
              Private Beta Now Open
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-8 text-white">
              When was the last time you thought, <span className="text-[#ef4444]">"I really need to call them,"</span> but never did?
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop letting meaningful connections slip through the cracks. KinKeep is the privacy-focused Personal Relationship Manager that turns your static address book into an active maintenance plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)]">
                  Start Keeping in Touch — Free <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">No account required. Data stays on your device.</p>
          </motion.div>
        </section>

        {/* Section 2: Problem vs Solution */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <Card delay={0.1} className="h-full">
              <div className="flex items-center gap-4 mb-4 text-zinc-500">
                <Database className="w-6 h-6" />
                <h3 className="text-lg font-bold font-display tracking-tight">The Graveyard</h3>
              </div>
              <p className="text-2xl font-bold font-display mb-4 text-zinc-500">Your phone contacts are a graveyard.</p>
              <p className="text-zinc-400 leading-relaxed">Standard address books are just lists of names and numbers waiting to be forgotten. Static, cold, and dead.</p>
            </Card>
            <Card delay={0.2} className="h-full bg-gradient-to-br from-[#4f7cac]/20 to-transparent border-[#4f7cac]/20">
              <div className="flex items-center gap-4 mb-4 text-[#9eefe5]">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-lg font-bold font-display tracking-tight">The Garden</h3>
              </div>
              <p className="text-2xl font-bold font-display mb-4 text-white">KinKeep is a garden.</p>
              <p className="text-zinc-300 leading-relaxed">Relationships need maintenance. Whether it’s calling your parents every Sunday, texting a college friend once a month, or networking with a mentor quarterly, KinKeep handles the "when" so you can focus on the "who."</p>
            </Card>
          </div>
        </section>

        {/* Section 3: The Dashboard (Bento Grid) */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Wake up to a plan, not a chaotic inbox.</h2>
            <p className="text-zinc-400 text-lg">The KinKeep Dashboard answers one specific question: <strong className="text-white">Who do I need to connect with today?</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6 h-auto lg:h-[600px]">
            {/* Feature 1: Focus Contact (Top Left Big Block - 2x2) */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-70"><span className="text-[10px] font-bold uppercase tracking-widest text-[#ef4444] bg-[#ef4444]/10 px-2 py-1 rounded-full">High Priority</span></div>
              <div className="mt-4">
                <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-4xl border-2 border-white/5 shadow-xl">👩‍👧</div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Call Mom</h3>
                <p className="text-[#ef4444] text-sm font-bold mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                  Overdue by 2 days
                </p>
                <div className="flex gap-3">
                  <Button variant="primary" className="!px-6 !py-3 text-sm flex-1">
                    <Phone className="w-4 h-4" /> Contact Now
                  </Button>
                  <Button variant="secondary" className="!px-4 !py-3 text-sm">
                    Snooze
                  </Button>
                </div>
              </div>
              <div className="mt-8 border-t border-white/5 pt-4">
                <p className="text-zinc-500 text-xs uppercase tracking-wide font-medium">Last connected: 2 weeks ago</p>
              </div>
            </Card>

            {/* Feature 2: Stats (Top Right Small Block) */}
            <Card className="col-span-1 md:col-span-1 flex flex-col justify-center items-center text-center bg-[#4f7cac]/10 border-[#4f7cac]/20">
              <div className="text-5xl font-display font-bold text-[#4f7cac] mb-2">5</div>
              <p className="text-[10px] text-[#4f7cac]/80 font-bold uppercase tracking-widest">Connections this week</p>
            </Card>

            {/* Feature 3: Smart Lists (Top Right Wide Block) */}
            <Card className="col-span-1 md:col-span-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-sm font-medium text-white">Upcoming Birthdays</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <span className="text-sm font-medium text-white">Overdue Check-ins</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4f7cac]" />
                <span className="text-sm font-medium text-white">Work Network</span>
              </div>
            </Card>

            {/* Feature 4: Upcoming Schedule (Bottom Wide Block) */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white font-display">Upcoming Schedule</h3>
                <span className="text-xs text-zinc-500">Next 7 Days</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Sarah (Friend)', day: 'Tomorrow', icon: 'S', color: 'bg-[#4f7cac]' },
                  { name: 'Imam (Community)', day: 'Friday', icon: 'I', color: 'bg-emerald-500' },
                  { name: 'Boss (Work)', day: 'Monday', icon: 'B', color: 'bg-purple-500' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className={`w-10 h-10 rounded-full ${item.color}/20 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>{item.icon}</div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      <div className="text-xs text-zinc-400">{item.day}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 4: Cadence */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Set your rhythm. <br /><span className="text-[#4f7cac]">We’ll keep the beat.</span></h2>
              <p className="text-zinc-400 text-lg mb-8">
                Relationships isn't one-size-fits-all. KinKeep gives you granular control over the cadence of every connection in your life.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "The Inner Circle", desc: "Stay consistently present in the lives of those closest to you." },
                  { title: "The Keep-In-Touch", desc: "Bridge the gap with friends you don't see often but care about deeply." },
                  { title: "The Network", desc: "Keep professional relationships warm without over-committing your time." },
                  { title: "Batch Your Time", desc: "Assign 'Preferred Days' to specific contacts. Call family on Sundays." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#4f7cac]/20 flex items-center justify-center text-[#4f7cac] mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-display">{item.title}</strong>
                      <span className="text-zinc-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 relative">
              {/* Visualizing Cadence Settings */}
              <Card className="max-w-sm ml-auto">
                <div className="mb-6 border-b border-white/10 pb-4">
                  <h4 className="font-medium text-sm text-zinc-400 mb-2">Frequency</h4>
                  <div className="flex gap-2 flex-wrap">
                    {['Daily', 'Weekly', 'Monthly', 'Yearly'].map(opt => (
                      <span key={opt} className={`px-3 py-1 rounded-full text-sm border ${opt === 'Weekly' ? 'bg-[#4f7cac] border-[#4f7cac] text-white' : 'border-white/10 text-zinc-500'}`}>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-zinc-400 mb-2">Preferred Day</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <div key={i} className={`h-10 rounded-lg flex items-center justify-center text-xs ${i === 0 ? 'bg-[#4f7cac]/20 text-[#4f7cac] border border-[#4f7cac]/30' : 'bg-white/5 text-zinc-500 border border-white/5'}`}>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Sorting Hat (Onboarding) */}
        <section className="max-w-4xl mx-auto mb-32 text-center">
          <Card className="bg-white/5 border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f7cac]/10 to-transparent pointer-events-none"></div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 px-2 text-white">Organize your entire network in minutes, not hours.</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto relative z-10">
              Dreading the setup? Don't. Our <strong>Import Wizard</strong> ingests your existing CSV or VCF files and helps you rapidly assign frequencies to bulk groups. Turn a list of 500 undefined contacts into a prioritized maintenance schedule in just a few clicks.
            </p>
            <div className="flex justify-center relative z-10">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ef4444] to-[#4f7cac] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-[#1E2130] rounded-xl p-4 flex items-center gap-4 border border-white/10">
                  <div className="bg-white/5 p-2 rounded-lg"><Download className="w-6 h-6 text-zinc-300" /></div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">Import Contacts.csv</div>
                    <div className="text-xs text-zinc-500">Drag and drop or click to upload</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Section 6: Templates */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="relative overflow-hidden">
                <div className="bg-[#1E2130] rounded-xl p-4 mb-4 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-zinc-500">Template: Birthday</span>
                    <span className="text-xs bg-[#4f7cac]/10 text-[#4f7cac] px-2 py-0.5 rounded">Active</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    "Happy Birthday <span className="text-[#4f7cac] bg-[#4f7cac]/10 px-1 rounded">{'{NAME}'}</span>! Hope you have a fantastic day filled with joy."
                  </p>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="h-8 w-8 bg-white/5 rounded-full"></div>
                  <div className="h-8 w-24 bg-[#4f7cac] rounded-full opacity-20"></div>
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Say the right thing, at the right time.</h2>
              <p className="text-zinc-400 mb-6">
                Staring at a blank text box creates resistance. Use the <strong>Template Library</strong> to store your go-to messages for birthdays, networking follow-ups, or casual check-ins.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MessageCircle className="text-[#9eefe5] w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-300"><strong className="text-white">Personalization at Scale:</strong> Use dynamic variables like <code className="bg-white/10 px-1 py-0.5 rounded text-sm">{'{NAME}'}</code> to send warm, personalized messages to multiple people without retyping.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Privacy */}
        <section className="max-w-3xl mx-auto mb-32 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Your relationships are private. <br />Your data should be too.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            In an era of cloud leaks and data mining, KinKeep takes a radical approach: <strong>We don't want your data.</strong>
            <br /><br />
            KinKeep is a local-first application. Your contacts, your notes, and your schedules are stored securely in your browser (IndexedDB) on your own device. Nothing is ever sent to a remote server.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Local-first Architecture</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Export to JSON/CSV</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Zero Cloud Storage</span>
          </div>
        </section>

        {/* Section 8: Footer */}
        <section className="text-center py-20 border-t border-white/5 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Be the friend who remembers.</h2>
          <p className="text-zinc-400 mb-10 text-xl">Build better habits and strengthen your community today.</p>
          <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Button className="mx-auto text-lg px-12 py-5 shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)]">
              Launch KinKeep Now
            </Button>
          </a>
          <div className="mt-12 text-zinc-600 text-sm">
            © {new Date().getFullYear()} KinKeep. All rights reserved. Locally Hosted.
          </div>
        </section>

      </main>
    </div >
  );
}

export default App;
