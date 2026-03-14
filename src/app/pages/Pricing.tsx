import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our platform",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "1 resume",
        "3 basic templates",
        "PDF export",
        "Basic AI suggestions",
        "Community support",
      ],
      limitations: [
        "Watermark on exports",
        "Limited customization",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Professional",
      description: "For serious job seekers",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "Unlimited resumes",
        "50+ premium templates",
        "All export formats (PDF, Word, TXT)",
        "Advanced AI writing assistance",
        "Cover letter builder",
        "Resume score & optimization",
        "ATS compatibility check",
        "Multiple language support",
        "Priority email support",
        "No watermarks",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "Centralized billing",
        "Admin dashboard",
        "Custom branding",
        "API access",
        "LinkedIn integration",
        "Dedicated account manager",
        "Custom templates",
        "Advanced analytics",
        "SSO authentication",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial gives you full access to all Professional plan features for 14 days. No credit card required to start.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use Stripe for payment processing, which is PCI compliant and uses bank-level encryption.",
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students get 50% off the Professional plan. Contact support with your student ID for verification.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 via-pink-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that works best for you. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-lg">
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white border-0">
                  Save 17%
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transform transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                    : "border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle>
                    <div className="mb-2">{plan.name}</div>
                    <div className="text-sm font-normal text-gray-600">
                      {plan.description}
                    </div>
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                    {billingCycle === "annual" && plan.annualPrice > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save ${plan.monthlyPrice * 12 - plan.annualPrice} per year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Link to="/builder">
                    <Button
                      className={`w-full mb-6 transform hover:-translate-y-0.5 transition-all duration-300 ${
                        plan.popular 
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50" 
                          : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-500">
                        <CheckCircle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">All Plans Include</h2>
            <p className="text-xl text-gray-600">
              Core features available to all users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Intuitive drag-and-drop editor",
              "Real-time preview",
              "Mobile-responsive design",
              "Cloud storage",
              "Version history",
              "Auto-save functionality",
              "Spell check",
              "GDPR compliant",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            No credit card required. Cancel anytime. 14-day money-back guarantee.
          </p>
          <Link to="/builder">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}