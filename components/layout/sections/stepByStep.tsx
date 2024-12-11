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
    title: "Ignite Ideas and Foster Innovation",
    description:
      "Brain storming sessions lead to development of broder concept. A foundation for the desired out come is set. The idea is bred and given a shape. It is fed and bred on the planning desk. A broder picture starts to take shape.",
    image: "roboto.png",
  },
  {
    badgeTitle: "Engineering",
    title: "Create an Impact with Every Choice",
    description:
      "The concept is then given its intended heart and soul. Different aspects of the concepts are planned and made to fir such that is becomes one body one soul. Appropriate tools and technologies are applied to gather all the data and the needed intelligence to engineer a solution to meet the challenge",
    image: "runner.png",
  },
  {
    badgeTitle: "Team Work and Iteration",
    title: "Make Every Action Count",
    description:
      "The different aspects of the engineered solutions are developed by different teams. Each team deploys their specific expertise. All work in coherence in contributing with equal religious fervor to design and development of the proposed solution. The solution is then tested rigorously, fine-tuned as per observation and outcomes of the stringent quality measures. It is tested time and again to ensure that it covers all aspects, and is a success, as planned.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "Implementation",
    title: "Tackle this challenge together",
    description:
      "Plan is then implemented. It is monitored at different stages and phases to check, if the defined milestones are met leading to a successful completion.",
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
