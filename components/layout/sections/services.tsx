import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  icon: string;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    icon: "Blocks",
    title: "Fixed Cost Model",
    description:
      "In a fixed cost model, we agree on a specific set of requirements and deliverables with our clients. We then provide a quote for the entire project based on the agreed-upon scope. The project cost and timeline are fixed, and any changes to the scope or requirements during the project will require a change order. This model works well for clients who have a well-defined project with clear requirements and a fixed budget. It offers predictability and reduces the risk of budget overruns.",
    pro: 0,
  },
  {
    icon: "LineChart",

    title: "T & M Model",
    description:
      "In the Time and Material (T&M) model, we provide dedicated resources to work on your project. You can hire a team of developers, designers, project managers, or any other skilled professionals as per your requirement. You pay for the time and effort they spend on your project on an hourly or daily basis. You have complete control over the project, and you can scale up or down the team size as per your changing needs. This model works well for clients who require flexibility and want complete control over the project.",
    pro: 0,
  },
  {
    icon: "Wallet",

    title: "Partner With Us",
    description:
      "In the Partner with Us model, we offer a partnership to clients who are looking for a long-term engagement. We collabora-te with you to understand your business objectives and provide qualified and experienced professionals with sound domain knowledge to help you achieve your goals. We work together as a team to develop and deliver solutions that meet your business requirements. This model is suitable for clients who want to build a long-term relationship and are looking for a partner who can help them achie",
    pro: 0,
  },
  {
    icon: "Sparkle",

    title: "Technology Consultancy",
    description:
      "We deliver premium, mission-critical corporate solutions that satisfy all of your requirements and help you reach your main business objective. We provide consulting services across the whole IT lifecycle, from software system design, development, and implementation to business process re-engineering",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From mobile app development to web development, we have the expertise to
        help you build innovative solutions and achieve your business goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div> */}
      <div className="grid lg:grid-cols-2 gap-4 w-full">
          {serviceList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
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
    </section>
  );
};
