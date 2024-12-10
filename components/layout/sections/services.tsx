import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "We offer comprehensive web development services that help businesses achieve experienced developers, we create responsive, visually appealing e, visually appealing websites that provide an exceptional user experience. Our expertise in modern web technologies ensures that your website is functional, secure, and optimized for search engines.",
    pro: 0,
  },
  {
    title: "Mobile App Development",
    description:
      "Regardless of the type of mobile app you have in mind; we have a solution that fits your business needs. We provide your users with sleek, productive and easy to-use mobile solutions, and they pay you back with increased loyalty and real world engagement. To secure coverage of all dimensions of the solution's quality.",
    pro: 0,
  },
  {
    title: "Web Application Development",
    description: "We help our customers embrace the mobile-centric web reality and transform their systems into modern cross-platform applications. Drawing from our deep front-end expertise, our web app developers implement the most demanded web app development scenarios by creating functional, convenient, and visually compelling applications",
    pro: 0,
  },
  {
    title: "Technology Consultancy",
    description: "We deliver premium, mission-critical corporate solutions that satisfy all of your requirements and help you reach your main business objective. We provide consulting services across the whole IT lifecycle, from software system design, development, and implementation to business process re-engineering",
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
      From mobile app development to web development, we have the expertise to help you build innovative solutions and achieve your business goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
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
      </div>
    </section>
  );
};
