import { useState, useEffect } from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  status: 'pending' | 'active' | 'complete';
}

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [showPipeline, setShowPipeline] = useState(false);

  const steps: Step[] = [
    { id: 1, title: 'Describe Your App', description: 'AI generates SwiftUI code from your description', icon: '💭', status: 'pending' },
    { id: 2, title: 'Generate Code', description: 'Claude writes production-ready Swift code', icon: '⚡', status: 'pending' },
    { id: 3, title: 'Build & Test', description: 'Xcode compiles and runs on simulator', icon: '🔨', status: 'pending' },
    { id: 4, title: 'Review & Iterate', description: 'Refine your app with AI assistance', icon: '🔄', status: 'pending' },
    { id: 5, title: 'Prepare Submission', description: 'Generate screenshots, descriptions, metadata', icon: '📦', status: 'pending' },
    { id: 6, title: 'Manual Publish', description: 'You submit via App Store Connect (required)', icon: '🍎', status: 'pending' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowPipeline(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPipeline) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % (steps.length + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [showPipeline, steps.length]);

  const getStepStatus = (index: number): 'pending' | 'active' | 'complete' => {
    if (index < activeStep) return 'complete';
    if (index === activeStep) return 'active';
    return 'pending';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.08)_0%,_transparent_50%)] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(255,45,146,0.06)_0%,_transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.05)_0%,_transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="px-4 md:px-8 lg:px-16 pt-12 md:pt-20 pb-8 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#ff2d92] flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-[#00d4ff]/20">
                🚀
              </div>
              <span className="text-sm md:text-base font-medium tracking-wider text-white/50 uppercase">iOS Development with AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 md:mb-8">
              <span className="block">Can AI build</span>
              <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ff2d92] bg-clip-text text-transparent">
                iOS apps?
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed mb-8 md:mb-12">
              Yes, AI can write SwiftUI code and help you build apps. But auto-publishing?
              <span className="text-[#ff2d92]"> That's not possible</span> — Apple requires human verification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 md:px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00d4ff]/25 hover:scale-[1.02] active:scale-[0.98]">
                <span className="flex items-center justify-center gap-2">
                  See How It Works
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="px-6 md:px-8 py-4 border border-white/20 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/40 active:scale-[0.98]">
                View Limitations
              </button>
            </div>
          </div>
        </header>

        {/* Pipeline Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
              <span className="text-xs md:text-sm font-medium tracking-wider text-[#00d4ff] uppercase">The Development Pipeline</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
              From Idea to App Store
            </h2>

            {/* Pipeline visualization */}
            <div className={`transition-all duration-1000 ${showPipeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {steps.map((step, index) => {
                  const status = getStepStatus(index);
                  return (
                    <div
                      key={step.id}
                      className={`relative p-5 md:p-6 rounded-3xl border transition-all duration-500 ${
                        status === 'active'
                          ? 'bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 border-[#00d4ff]/50 shadow-xl shadow-[#00d4ff]/10 scale-[1.02]'
                          : status === 'complete'
                          ? 'bg-white/5 border-[#00d4ff]/30'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Step number */}
                      <div className={`absolute -top-3 -right-2 md:-top-4 md:-right-3 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                        status === 'complete'
                          ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] text-white'
                          : status === 'active'
                          ? 'bg-[#ff2d92] text-white animate-pulse'
                          : 'bg-white/10 text-white/50'
                      }`}>
                        {status === 'complete' ? '✓' : step.id}
                      </div>

                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                      <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${
                        status === 'active' ? 'text-[#00d4ff]' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/50 leading-relaxed">{step.description}</p>

                      {/* Connection line for non-last items */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5">
                          <div className={`h-full transition-all duration-500 ${
                            status === 'complete' ? 'bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]' : 'bg-white/10'
                          }`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 md:p-10 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#ff2d92]/10 to-[#8b5cf6]/10 border border-[#ff2d92]/30">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#ff2d92]/5 to-transparent blur-xl" />

              <div className="relative">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#ff2d92]/20 flex items-center justify-center text-2xl md:text-3xl">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff2d92] mb-3">Why Auto-Publish Isn't Possible</h3>
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-white/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#ff2d92] mt-1">•</span>
                        <span><strong className="text-white">Apple Developer Account</strong> — Requires $99/year and identity verification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#ff2d92] mt-1">•</span>
                        <span><strong className="text-white">Code Signing</strong> — Certificates must be tied to a verified developer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#ff2d92] mt-1">•</span>
                        <span><strong className="text-white">App Review</strong> — Apple manually reviews every submission</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#ff2d92] mt-1">•</span>
                        <span><strong className="text-white">Legal Agreements</strong> — You must accept terms and conditions personally</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What AI CAN Do */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              What AI <span className="text-[#00d4ff]">Can</span> Do
            </h2>
            <p className="text-center text-white/50 mb-12 md:mb-16 text-base md:text-lg max-w-2xl mx-auto">
              While auto-publishing isn't possible, AI can dramatically accelerate your iOS development
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: '📱', title: 'Write SwiftUI Code', desc: 'Generate complete views, components, and navigation structures' },
                { icon: '🎨', title: 'Design UI/UX', desc: 'Create beautiful interfaces with animations and transitions' },
                { icon: '🔧', title: 'Debug & Fix Issues', desc: 'Identify bugs and suggest solutions in your Swift code' },
                { icon: '📝', title: 'App Store Materials', desc: 'Write descriptions, generate keyword suggestions, and more' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#00d4ff] transition-colors">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#ff2d92]/20 border border-white/10 text-sm mb-6 md:mb-8">
              Ready to build your iOS app?
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
              Start with AI,
              <br />
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff2d92] bg-clip-text text-transparent">
                Publish Yourself
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-8 md:mb-10 max-w-xl mx-auto">
              Use Claude to write your Swift code, design your UI, and prepare everything for submission. The final step is always yours.
            </p>
            <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-[#0a0a0f] rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]">
              Get Started with Claude
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-8 lg:px-16 py-8 md:py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs md:text-sm text-white/30">
              Requested by <a href="https://twitter.com/elion_shahini" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">@elion_shahini</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">@clonkbot</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
