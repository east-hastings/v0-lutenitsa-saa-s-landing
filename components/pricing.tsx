import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for trying authentic lutenitsa",
    features: ["1 jar per month", "Free shipping", "Access to recipes", "Cancel anytime"],
  },
  {
    name: "Premium",
    price: "$49",
    description: "For true lutenitsa lovers",
    features: [
      "3 jars per month",
      "Free priority shipping",
      "Exclusive producer access",
      "Recipe community",
      "Early access to new flavors",
    ],
    highlighted: true,
  },
  {
    name: "Connoisseur",
    price: "$99",
    description: "The ultimate experience",
    features: [
      "6 jars per month",
      "Express shipping",
      "Personal producer consultations",
      "VIP community access",
      "Limited edition flavors",
      "Exclusive merchandise",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your taste</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`border-2 transition ${plan.highlighted ? "border-primary bg-primary/5" : "border-border"}`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
