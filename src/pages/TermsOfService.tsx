import { motion } from 'framer-motion';

export function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-text">Terms of Service</h1>

                <div className="prose prose-lg prose-headings:text-text prose-p:text-text/80 prose-strong:text-text mb-16">
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to KinKeep. By accessing or using our website and application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use the service.
                    </p>

                    <h3>2. Use License</h3>
                    <p>
                        KinKeep is free to use. You are granted a limited, non-exclusive, non-transferable license to use the application for personal, non-commercial purposes.
                    </p>

                    <h3>3. Disclaimer of Warranties</h3>
                    <p>
                        The application is provided "as is," without warranty of any kind, express or implied. We do not guarantee that the application will be error-free or that access to it will be continuous or uninterrupted.
                    </p>
                    <p>
                        Because KinKeep stores data locally on your device, <strong>you are solely responsible for your data</strong>. If you clear your browser cache or lose your device without backing up your data (via the Export JSON feature), your data will be lost. We cannot recover it for you because we do not have it.
                    </p>

                    <h3>4. Limitation of Liability</h3>
                    <p>
                        In no event shall KinKeep or its creators be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the application.
                    </p>

                    <h3>5. Changes</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
