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
  {
    icon: "Newspaper",
    title: "OFC Network planning/FTTx Planning",
    description:
      "Optical Fiber Networks are transforming communication in Telecom/IT sectors like broadband, CATV, FTTx, and IPTV, driving smarter cities. We provide end-to-end services, including surveys, planning, AutoCAD drawings, estimations, material procurement, and ROW planning for both city access and long-distance backbone networks.",
  },  
  {
    icon: "MousePointerClick",
    title: "GIS based Optic Fiber Route Survey",
    description:
      "We conduct surveys gathering the mission critical intelligence such as Right of Way, key authority details for securing required permissions in time, preparing Bill of Quantities (BOQ), checking and ensuring best Route Feasibility and preparing Issue For Construction (IFC) drawings.",
  },
  {
    icon: "PictureInPicture",
    title: "GIS Based Post survey/Preparation of As-Built Drawings",
    description:
      "Upon completion of the project, deploying our expertise we secure and record all the changes and departures from the original survey and prepare As-Built Drawings reflecting all the changes in the specifications with exact dimensions, locations and geometry of all elements for the OFC laid",
  },
  {
    icon: "PictureInPicture",
    title: "Points of interest(POI) Survey & data Collection",
    description:
      "We empower clients with accurate and digital Point of Interest (POI) and Field Surveys, leveraging advanced technologies and a team of experienced data science professionals. Our customized POI surveys deliver detailed, actionable insights, offering unique intelligence for industries such as banking, retail, real estate, and government. These comprehensive reports help organizations develop data-driven solutions, optimizing the use of locations and supporting strategic decision-making for maximum impact.",
  },
  {
    icon: "Goal",
    title: "Design and CAD drafting Services",
    description:
      "Whatever be the scale of your project; technical drawings/blueprints (electrical, mechanical, structural,) are mission-critical. We, with our team of expert drafters working with cutting-edge computer-aided drafting technologies, promise to produce extraordinarily precise and accurate 2D and 3D drawings. We can also deliver conversions, standardization of drawings and re-drawings of existing designs with elegance and accuracy, thereby markedly  improving their readability and accuracy",
  },
  {
    icon: "Goal",
    title: "Asset mapping",
    description:
      "Assets mapping capabilities are mission-critical intelligence gathering. We tap into our intellectual and expertise reservoir to help our Energy and Telecom clients establishing geospatial relationships between their facilities, assets, and landscape features. Asset mapping intelligence entails in designing more efficient solutions for our clients specifically  Telecommunication (in laying Transmission Lines) and, Energy ( in laying Gas Pipe Lines).",
  },
  {
    icon: "Goal",
    title: "Cadastral Mapping, Digital Topographical Mapping & Sewage Mapping for Urban and Rural Areas",
    description:
      "We recognize the importance of accurate Cadastral Maps for urban and rural planning. A well-crafted map provides precise details such as land boundaries, road limits, lot numbers, and other critical property information. We focus on accuracy, ensuring every land plot is clearly represented. Our expertise in Cadastral, Digital Topographical, and Sewage Mapping delivers valuable intelligence, enabling clients to plan stable, effective solutions for both rural and urban areas.",
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
       {`Empowering innovation, delivering excellence – we don't just solve
        problems. We shape the future.`} 
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

                <CardTitle className="text-center">{title}</CardTitle>
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
