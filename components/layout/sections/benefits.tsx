import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Expertise You Can Trust",
    description:
      "With over 17 years of experience, we bring deep industry knowledge and technical skills to deliver innovative solutions that help your business stay competitive.",
  },
  {
    icon: "LineChart",
    title: "Tailored Solutions for Every Business",
    description:
      "We design solutions to fit your unique business needs, whether it’s building a sleek website, automating processes, or developing powerful mobile apps.",
  },
  {
    icon: "Wallet",
    title: "Cost-Effective and Scalable Services",
    description:
      "Our affordable offshore development ensures high-quality services. We provide scalable solutions that grow with your business, offering long-term value.",
  },
  {
    icon: "Sparkle",
    title: "A Commitment to Excellence",
    description:
      "We prioritize client satisfaction by delivering on time, maintaining clear communication, and offering dedicated support to meet and exceed your expectations.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partnering with Designing Solutions means more than just IT services
            it’s about achieving your goals with innovative, reliable, and
            cost-effective solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    // color="hsl(var(--primary))"
                    color="green"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
