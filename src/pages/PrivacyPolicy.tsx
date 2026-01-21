import { motion } from 'framer-motion';

export function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-text">Privacy Policy</h1>

                <div className="prose prose-lg prose-headings:text-text prose-p:text-text/80 prose-strong:text-text mb-16">
                    <p className="text-xl font-bold text-secondary">
                        TL;DR: We do not want your data. We do not collect your data.
                    </p>

                    <h3>1. Data Collection</h3>
                    <p>
                        KinKeep is built on a "Local-First" architecture. This means that when you use our application, all of your data—your contacts, your notes, your schedule, and your preferences—is stored directly on your device's browser using IndexedDB.
                    </p>
                    <p>
                        We do not have a backend database for user data. We do not have user accounts. We do not have access to anything you enter into the application.
                    </p>

                    <h3>2. Third-Party Services</h3>
                    <p>
                        To host this website, we use standard static hosting providers (such as Netlify). These providers may collect standard server logs (IP addresses, user agents) for security and operational purposes. This is standard for almost every website on the internet and is outside of our direct control, but we do not use this data for any tracking or analytics.
                    </p>

                    <h3>3. Analytics</h3>
                    <p>
                        We do not run any tracking cookies, ad networks, or invasive analytics scripts. We respect your right to privacy completely.
                    </p>

                    <h3>4. Contact</h3>
                    <p>
                        If you have any questions about this policy, please reach out to the developer directly. But honestly, since we don't hold any of your data, there isn't much to ask about!
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
