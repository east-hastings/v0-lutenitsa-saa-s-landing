import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Maria Petrov",
    role: "Food Blogger",
    content: "The quality is exceptional. This is the most authentic lutenitsa I've found outside of Bulgaria.",
    rating: 5,
  },
  {
    name: "Chef Stefan",
    role: "Restaurant Owner",
    content: "We use Lutenitsa for our restaurant. Our customers love it and ask for it by name.",
    rating: 5,
  },
  {
    name: "Elena Dimitrov",
    role: "Home Cook",
    content: "Finally, I can get the real thing delivered to my home. Worth every penny!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Loved by Food Enthusiasts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See what our customers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
