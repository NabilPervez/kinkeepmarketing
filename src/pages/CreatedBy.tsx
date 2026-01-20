import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export function CreatedBy() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-text">Assalamu Alaikum, <br /><span className="text-primary">I'm Nabil Pervez</span></h1>

                <div className="prose prose-lg prose-headings:text-text prose-p:text-text/80 mb-16">
                    <p className="text-xl">
                        I am the former CTO and Co-Founder of AOE Creative, an award-winning, multi-million dollar agency.
                    </p>
                    <p>
                        I spent years building brand identities and strategies for some of the world's most powerful companies.
                    </p>
                    <p>
                        I built KinKeep to help the community improve their relationships by combining my love of technology and connection. I really wanted to connect with the ummah and use the unique skillset Allah gave me to help.
                    </p>
                    <p>
                        Now, I am available to apply my executive expertise to the most important projects of all: your career, your business, and your deen.
                    </p>
                </div>

                <div className="bg-white shadow-md border border-secondary/50 rounded-3xl p-8 mb-16">
                    <h3 className="text-2xl font-bold font-display mb-4 text-text">How I Can Help You</h3>
                    <p className="text-text/80 mb-8">
                        Let's Build Something Great Together. Whether you're an individual looking to level up your career, or a business ready to scale, I'm here to guide you through the process.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://nabilpervezconsulting.com" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full sm:w-auto">
                                Book a Free Consulting Call <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                        <a href="https://nabilpervezconsulting.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Visit nabilpervezconsulting.com
                            </Button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
