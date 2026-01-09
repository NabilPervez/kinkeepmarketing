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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 bg-zinc-950/50 backdrop-blur-md border border-white/10">
            <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full"></div>
            <span className="font-bold tracking-tight">KinKeep</span>
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
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Private Beta Now Open
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              When was the last time you thought, <span className="text-blue-400">"I really need to call them,"</span> but never did?
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop letting meaningful connections slip through the cracks. KinKeep is the privacy-focused Personal Relationship Manager that turns your static address book into an active maintenance plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto text-lg px-8 py-4">
                  Start Keeping in Touch — Free <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">No account required. Data stays on your device.</p>
          </motion.div>
        </section>

        {/* Section 2: Problem vs Solution */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card delay={0.1}>
              <div className="flex items-center gap-4 mb-4 text-zinc-500">
                <Database className="w-6 h-6" />
                <h3 className="text-lg font-medium">The Graveyard</h3>
              </div>
              <p className="text-2xl font-semibold mb-2 text-zinc-300">Your phone contacts are a graveyard.</p>
              <p className="text-zinc-400">Standard address books are just lists of names and numbers waiting to be forgotten. Static, cold, and dead.</p>
            </Card>
            <Card delay={0.2} className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/20">
              <div className="flex items-center gap-4 mb-4 text-blue-400">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-lg font-medium">The Garden</h3>
              </div>
              <p className="text-2xl font-semibold mb-2 text-white">KinKeep is a garden.</p>
              <p className="text-zinc-400">Relationships need maintenance. Whether it’s calling your parents every Sunday, texting a college friend once a month, or networking with a mentor quarterly, KinKeep handles the "when" so you can focus on the "who."</p>
            </Card>
          </div>
        </section>

        {/* Section 3: The Dashboard (Bento Grid) */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Wake up to a plan, not a chaotic inbox.</h2>
            <p className="text-zinc-400 text-lg">The KinKeep Dashboard answers one specific question: <strong className="text-white">Who do I need to connect with today?</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
            {/* Feature 1: Focus Contact (Top Left Big Block - 2x2) */}
            <Card className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50"><span className="text-xs font-mono uppercase tracking-widest text-blue-400">Priority</span></div>
              <div>
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-2xl border border-white/10">👨‍👩‍👧</div>
                <h3 className="text-2xl font-bold text-white mb-1">Call Mom</h3>
                <p className="text-red-400 text-sm font-medium mb-4">Overdue by 2 days</p>
                <div className="flex gap-2">
                  <Button variant="primary" className="!px-4 !py-2 text-sm">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                  <Button variant="secondary" className="!px-4 !py-2 text-sm">
                    Snooze
                  </Button>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-zinc-500 text-sm">Last connected: 2 weeks ago</p>
              </div>
            </Card>

            {/* Feature 2: Stats (Top Right Small Block) */}
            <Card className="col-span-1 md:col-span-1 flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold text-blue-400 mb-1">5</div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Connections this week</p>
            </Card>

            {/* Feature 3: Smart Lists (Top Right Wide Block) */}
            <Card className="col-span-1 md:col-span-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Upcoming Birthdays</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-sm font-medium">Overdue Check-ins</span>
              </div>
            </Card>

            {/* Feature 4: Upcoming Schedule (Bottom Wide Block) */}
            <Card className="col-span-1 md:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Upcoming Schedule</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {[
                    { name: 'Sarah (Friend)', day: 'Tomorrow', icon: 'S' },
                    { name: 'Imam (Community)', day: 'Friday', icon: 'I' },
                    { name: 'Boss (Work)', day: 'Monday', icon: 'B' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 min-w-[140px] border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">{item.icon}</div>
                        <span className="text-sm font-medium truncate">{item.name}</span>
                      </div>
                      <div className="text-xs text-zinc-500">{item.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 4: Cadence */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Set your rhythm. <br /><span className="text-zinc-600">We’ll keep the beat.</span></h2>
              <p className="text-zinc-400 text-lg mb-8">
                Relationships isn't one-size-fits-all. KinKeep gives you granular control over the cadence of every connection in your life.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "The Inner Circle", desc: "Set your spouse or parents to Daily or Every 3 Days." },
                  { title: "The Keep-In-Touch", desc: "Set old friends to Monthly or Quarterly." },
                  { title: "The Network", desc: "Set professional acquaintances to Yearly." },
                  { title: "Batch Your Time", desc: "Assign 'Preferred Days' to specific contacts. Call family on Sundays." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block">{item.title}</strong>
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
                      <span key={opt} className={`px-3 py-1 rounded-full text-sm border ${opt === 'Weekly' ? 'bg-blue-600 border-blue-600 text-white' : 'border-zinc-700 text-zinc-400'}`}>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-zinc-400 mb-2">Preferred Day</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <div key={i} className={`h-8 rounded flex items-center justify-center text-xs ${i === 0 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-zinc-900 text-zinc-600'}`}>
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
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800">
            <h2 className="text-3xl font-bold mb-4">Organize your entire network in minutes, not hours.</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Dreading the setup? Don't. Our <strong>Import Wizard</strong> ingests your existing CSV or VCF files and helps you rapidly assign frequencies to bulk groups. Turn a list of 500 undefined contacts into a prioritized maintenance schedule in just a few clicks.
            </p>
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-zinc-900 rounded-xl p-4 flex items-center gap-4 border border-zinc-700">
                  <div className="bg-zinc-800 p-2 rounded-lg"><Download className="w-6 h-6 text-zinc-400" /></div>
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
                <div className="bg-zinc-900 rounded-lg p-4 mb-4 border border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-zinc-500">Template: Birthday</span>
                    <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    "Happy Birthday <span className="text-blue-400 bg-blue-400/10 px-1 rounded">{'{NAME}'}</span>! Hope you have a fantastic day filled with joy."
                  </p>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="h-8 w-8 bg-zinc-800 rounded-full"></div>
                  <div className="h-8 w-24 bg-blue-600 rounded-full opacity-20"></div>
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
                  <MessageCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-300"><strong className="text-white">Personalization at Scale:</strong> Use dynamic variables like <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">{'{NAME}'}</code> to send warm, personalized messages to multiple people without retyping.</span>
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
        <section className="text-center py-20 border-t border-white/5">
          <h2 className="text-4xl font-bold mb-4">Be the friend who remembers.</h2>
          <p className="text-zinc-400 mb-10">Build better habits and strengthen your community today.</p>
          <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Button className="mx-auto text-lg px-12 py-4 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]">
              Launch KinKeep Now
            </Button>
          </a>
          <div className="mt-12 text-zinc-600 text-sm">
            © {new Date().getFullYear()} KinKeep. All rights reserved. Locally Hosted.
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
