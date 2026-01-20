import { Link, Outlet } from 'react-router-dom';
import { Button } from './Button';
import { AuroraBackground } from './AuroraBackground';

export function Layout() {
    return (
        <div className="min-h-screen text-stormy-teal selection:bg-tropical-teal/30 bg-porcelain">
            <AuroraBackground />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-porcelain/80 backdrop-blur-md border-b border-stormy-teal/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-tropical-teal to-stormy-teal rounded-xl flex items-center justify-center font-bold text-lg shadow-lg text-white group-hover:scale-105 transition-transform">K</div>
                        <span className="font-display font-bold tracking-tight text-xl text-stormy-teal">KinKeep</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            <Link to="/" className="text-sm font-medium hover:text-tropical-teal transition-colors">Home</Link>
                            <Link to="/created-by" className="text-sm font-medium hover:text-tropical-teal transition-colors">Created By</Link>
                            <Link to="/donate" className="text-sm font-medium hover:text-tropical-teal transition-colors">Donate</Link>
                        </div>
                        <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="!py-2 !px-4 text-sm rounded-full">
                                Beta Access
                            </Button>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <Outlet />

                {/* Section 8: Footer */}
                <section className="text-center py-20 border-t border-stormy-teal/5 relative z-10 mt-32">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-stormy-teal">Be the friend who remembers.</h2>
                    <p className="text-teal mb-10 text-xl">Build better habits and strengthen your community today.</p>
                    <a href="https://kinkeep.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="mx-auto text-lg px-12 py-5 shadow-[0_0_40px_hsla(179,41%,45%,0.4)] hover:shadow-[0_0_60px_hsla(179,41%,45%,0.6)]">
                            Launch KinKeep Now
                        </Button>
                    </a>

                    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-sm">
                        <div>
                            <h4 className="font-bold mb-4 text-stormy-teal">Quick Links</h4>
                            <div className="flex flex-col gap-2">
                                <Link to="/" className="text-teal hover:text-tropical-teal">Home</Link>
                                <Link to="/created-by" className="text-teal hover:text-tropical-teal">Created By</Link>
                                <Link to="/donate" className="text-teal hover:text-tropical-teal">Donate</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-stormy-teal">Legal</h4>
                            <div className="flex flex-col gap-2">
                                <span className="text-teal/50 cursor-not-allowed">Privacy Policy</span>
                                <span className="text-teal/50 cursor-not-allowed">Terms of Service</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-teal/60 text-sm">
                        © {new Date().getFullYear()} KinKeep. All rights reserved. Locally Hosted.
                        <br />
                        Made with <span className="text-red-500">♥</span> for the Ummah
                    </div>
                </section>
            </main>
        </div >
    );
}
