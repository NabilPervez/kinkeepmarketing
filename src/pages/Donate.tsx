import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Heart, Server, Users, Code } from 'lucide-react';

export function Donate() {
    // Placeholder stripe links - user can update these later or strict to provided copy layout
    const donationTiers = [
        { amount: 5, label: '$5', link: '#' },
        { amount: 10, label: '$10', link: '#' },
        { amount: 20, label: '$20', link: '#' },
        { amount: 50, label: '$50', link: '#' },
    ];

    return (
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center justify-center p-3 bg-pearl-aqua/20 rounded-full mb-6">
                    <Heart className="w-8 h-8 text-tropical-teal" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-stormy-teal">Support Open Source Sadaqah Jariyah</h1>

                <p className="text-xl text-teal mb-12 max-w-2xl mx-auto">
                    KinKeep is built by the community, for the community. Your donations help us keep the app running, develop new features, and generate content for Muslims worldwide.
                </p>

                <div className="mb-16">
                    <h3 className="text-lg font-bold text-stormy-teal mb-6">Choose an Amount</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {donationTiers.map((tier) => (
                            <a key={tier.amount} href={tier.link} target="_blank" rel="noopener noreferrer">
                                <button className="w-24 h-16 rounded-xl border-2 border-stormy-teal/10 hover:border-tropical-teal bg-white/50 hover:bg-tropical-teal hover:text-white transition-all text-xl font-bold text-stormy-teal flex items-center justify-center">
                                    {tier.label}
                                </button>
                            </a>
                        ))}
                    </div>
                </div>

                <h2 className="text-3xl font-display font-bold mb-10 text-stormy-teal">Your Impact</h2>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <Card className="bg-white/50 backdrop-blur-sm border-stormy-teal/5">
                        <div className="w-12 h-12 rounded-full bg-pearl-aqua/20 flex items-center justify-center text-tropical-teal mb-4">
                            <Server className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-stormy-teal mb-2">Server Costs</h3>
                        <p className="text-teal text-sm">Keeping the app fast, reliable, and accessible to users.</p>
                    </Card>

                    <Card className="bg-white/50 backdrop-blur-sm border-stormy-teal/5">
                        <div className="w-12 h-12 rounded-full bg-pearl-aqua/20 flex items-center justify-center text-tropical-teal mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-stormy-teal mb-2">Community Features</h3>
                        <p className="text-teal text-sm">Developing social features to connect Muslims.</p>
                    </Card>

                    <Card className="bg-white/50 backdrop-blur-sm border-stormy-teal/5">
                        <div className="w-12 h-12 rounded-full bg-pearl-aqua/20 flex items-center justify-center text-tropical-teal mb-4">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-stormy-teal mb-2">Developer Support</h3>
                        <p className="text-teal text-sm">Allowing our team to dedicate more hours to coding, bug fixing, and support.</p>
                    </Card>
                </div>
            </motion.div>
        </div>
    );
}
