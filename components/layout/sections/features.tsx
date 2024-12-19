import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Website Development",
    description:
      "We offer comprehensive web development services that help businesses achieve experienced developers, we create responsive, visually appealing websites that provide an exceptional user experience.",
  },
  {
    icon: "BadgeCheck",
    title: "Mobile App Development",
    description:
      "Regardless of the type of mobile app you have in mind we have a solution that fits your business needs. We provide your users with sleek, productive and easy to-use mobile solutions.",
  },
  {
    icon: "Goal",
    title: "Web Application Development",
    description:
      "We help our customers embrace the mobile-centric web reality and transform their systems into modern cross-platform applications. Drawing from our deep front-end expertise.",
  },
  {
    icon: "PictureInPicture",
    title: "Technology Consultancy",
    description:
      "We deliver transformative, mission-critical solutions meticulously tailored to your strategic objectives, offering end-to-end expertise across the IT lifecycle—from conceptual design and sophisticated development to seamless implementation and process re-engineering.",
  },
  {
    icon: "MousePointerClick",
    title: "UI/UX Development",
    description:
      "We’ve been in the business long enough to know that exceptional User Interface & User Experience are the foundations upon which all great products are built. We put in the time and effort to make sure that the look and feel of your product is more than just aesthetic pleasing.",
  },
  {
    icon: "Newspaper",
    title: "Project Planning & Management",
    description:
      "We provide comprehensive project management services to ensure your initiatives remain on schedule and meet all deliverables. Collaborating closely, we craft detailed project timelines and strategically allocate tasks to optimize time and resources.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Empowering innovation, delivering excellence – we don't just solve
        problems. We shape the future.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                {/* <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"> */}
                <div className="bg-[#065c00] p-2 rounded-full ring-8 ring-[#032e00] mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    // color="hsl(var(--primary))"
                    color="#10f000"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
