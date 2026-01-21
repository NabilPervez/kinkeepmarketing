import { Link, Outlet } from 'react-router-dom';
import { Button } from './Button';
import { AuroraBackground } from './AuroraBackground';

export function Layout() {
    return (
        <div className="min-h-screen text-text selection:bg-accent/30 bg-background">
            <AuroraBackground />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm text-white border border-white/20 group-hover:bg-white/20 transition-all">K</div>
                        <span className="font-display font-bold tracking-tight text-xl text-white">KinKeep</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            <Link to="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Home</Link>
                            <Link to="/created-by" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Created By</Link>
                        </div>
                        <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="!py-2 !px-4 text-sm rounded-full bg-white text-primary hover:bg-white/90 shadow-none border-none">
                                Beta Access
                            </Button>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <Outlet />

                {/* Section 8: Footer */}
                <section className="text-center py-20 border-t border-secondary relative z-10 mt-32">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Be the friend who remembers.</h2>
                    <p className="text-text/70 mb-10 text-xl">Build better habits and strengthen your community today.</p>
                    <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="mx-auto text-lg px-12 py-5 shadow-lg hover:shadow-xl bg-accent text-dark-slate hover:bg-accent/90">
                            Launch KinKeep Now
                        </Button>
                    </a>

                    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-sm">
                        <div>
                            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                            <div className="flex flex-col gap-2">
                                <Link to="/" className="text-text/60 hover:text-primary transition-colors">Home</Link>
                                <Link to="/created-by" className="text-text/60 hover:text-primary transition-colors">Created By</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Legal</h4>
                            <div className="flex flex-col gap-2">
                                <Link to="/privacy-policy" className="text-text/40 hover:text-text transition-colors">Privacy Policy</Link>
                                <Link to="/terms-of-service" className="text-text/40 hover:text-text transition-colors">Terms of Service</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-text/40 text-sm">
                        © {new Date().getFullYear()} KinKeep. All rights reserved. Locally Hosted.
                        <br />
                        Made with <span className="text-red-500">♥</span> for the Ummah
                    </div>
                </section>
            </main>
        </div >
    );
}
