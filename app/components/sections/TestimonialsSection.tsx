export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      quote: "PostPilot has completely transformed my LinkedIn strategy. The AI-generated content sounds exactly like me, and my engagement has increased by 300% in just two months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Sales Manager",
      company: "Growth Partners",
      quote: "I was skeptical about AI writing, but PostPilot's tone matching is incredible. My network can't tell the difference between my posts and AI-generated ones.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Content Creator",
      company: "Digital Nomad",
      quote: "As a content creator, I need to post consistently. PostPilot helps me maintain my voice while saving hours of writing time every week.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-500 to-sky-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-sky-200">Professionals</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of professionals who trust PostPilot to enhance their LinkedIn presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sky-700 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-white/90 mb-8">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-white font-semibold">Microsoft</div>
            <div className="text-white font-semibold">Google</div>
            <div className="text-white font-semibold">Salesforce</div>
            <div className="text-white font-semibold">HubSpot</div>
            <div className="text-white font-semibold">Adobe</div>
          </div>
        </div>
      </div>
    </section>
  );
} 