export default function AboutSection() {
  const features = [
    {
      title: "AI-Generated Posts",
      description: "Create engaging content based on your profile and ideas with advanced AI technology."
    },
    {
      title: "Smart Tone Matching",
      description: "Our AI adapts to your writing style to sound authentically like you, not a robot."
    },
    {
      title: "Optimized for Engagement",
      description: "Built with LinkedIn best practices to maximize reach and engagement on your posts."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Why <span className="">PostPilot </span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your LinkedIn presence with AI-powered content that sounds like you wrote it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-sky-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-sky-800 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Posts Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">95%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
} 