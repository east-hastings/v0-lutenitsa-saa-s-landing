import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Direct from Producers",
    description: "Skip the middleman and buy directly from authentic Balkan producers",
    icon: "🌶️",
  },
  {
    title: "Quality Guaranteed",
    description: "Every jar is tested and verified for authenticity and freshness",
    icon: "✓",
  },
  {
    title: "Subscription Flexibility",
    description: "Pause, skip, or cancel anytime. No long-term commitments",
    icon: "📦",
  },
  {
    title: "Fast Shipping",
    description: "Get your lutenitsa within 2-3 business days, fresh and ready",
    icon: "⚡",
  },
  {
    title: "Recipe Community",
    description: "Access exclusive recipes and cooking tips from our community",
    icon: "👨‍🍳",
  },
  {
    title: "Sustainable Packaging",
    description: "Eco-friendly jars and packaging that you can reuse or recycle",
    icon: "🌱",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Lutenitsa?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to discover and enjoy authentic Balkan flavors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-border hover:border-primary/50 transition">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
