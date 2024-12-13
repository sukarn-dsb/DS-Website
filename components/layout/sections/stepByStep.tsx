import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the type for the props
interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

// List of items to be displayed
const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Idea Generation and Incubation",
    title: "Understand Your Needs",
    description:
      "We start by analyzing your business requirements, goals, and challenges to craft a tailored strategy that aligns with your vision.",
    image: "roboto.png",
  },
  {
    badgeTitle: "Engineering",
    title: "Plan and Strategize",
    description:
      "Our team designs a comprehensive roadmap, detailing the timeline, deliverables, and resources needed for successful project execution.",
    image: "runner.png",
  },
  {
    badgeTitle: "Team Work and Iteration",
    title: "Develop and Test",
    description:
      "Using cutting-edge technologies, we bring your project to life. Rigorous testing ensures the solution is functional, secure, and user-friendly.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "Implementation",
    title: "Deliver and Support",
    description:
      "We deliver the final product on time and provide ongoing support to ensure seamless integration and long-term success for your business.",
    image: "gamestation.png",
  },
];

// JSX Component for the section
const HowItWorksSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          How It Works
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Step-by-Step Process
        </h2>
      </div>

      <div className="lg:w-[80%] mx-auto relative">
        {HowItWorksList.map(({ badgeTitle, title, description, image }, index) => (
          <div
            key={title}
            className={`flex mb-8 items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          >
            <Card className="h-full bg-transparent border-0 shadow-none">
              <CardHeader>
                <div className="pb-4">
                  <Badge>{badgeTitle}</Badge>
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground w-[80%]">
                {description}
              </CardContent>
            </Card>

            <img
              src={image}
              alt={`Image describing ${title}`}
              className="w-[150px] md:w-[250px] lg:w-[300px] mx-auto -scale-x-100"
            />
            <div
              className={`-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl ${
                index % 2 !== 0 ? 'left-0' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
