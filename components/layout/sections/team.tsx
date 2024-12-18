import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import Swaraj from "../../../public/Swaraj2_DS.png";
import Sunil from "@/public/Sunil_DS.png";
import Sandeep from "@/public/Sandeep_DS.png";
import Ravi from "@/public/Ravi_DS.png";
import Davinder from "@/public/Davinder_DS.png";
import Manish from "@/public/Manish_DS.png";
import SunilM from "@/public/SunilM_DS.png";
import KB from "@/public/Kulbhushan_DS.png";
import Simran from "@/public/Simran_DS.png";
import Pankaj from "@/public/Pankaj_DS.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: any;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
  fewWords?: string;
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      // imageUrl: "https://i.pravatar.cc/250?img=58",
      imageUrl: Davinder,
      firstName: "Davinder",
      lastName: "Singh",
      positions: ["Co-Founder & CEO"],
      fewWords:
        "Drives the strategic vision and overall growth of Designing Solutions, leveraging over 17 years of leadership in IT and Telecom.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Manish,
      firstName: "Manish",
      lastName: "Taneja ",
      positions: ["Co-Founder & CFO"],
      fewWords:
        "Oversees financial operations and strategies, ensuring stability and growth with his extensive expertise in finance and management.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Swaraj,
      firstName: "Swarajpaul",
      lastName: "Singh",
      positions: ["Chief Business Officer (CBO)"],
      fewWords:
        "Heads the IT vertical, spearheading innovative projects and aligning technology strategies with business objectives to create impactful solutions.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Sunil,
      firstName: "Sunil",
      lastName: "Negi",
      positions: ["IT Development Lead"],
      fewWords:
        "A highly skilled developer with technological expertise, Sunil oversees and manages the technical aspects of the IT team, ensuring seamless execution and high-quality deliverables.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: SunilM,
      firstName: "Sunil",
      lastName: "Madaan",
      positions: ["Project Manager"],
      fewWords:
        "Leads complex projects in the Telecom industry with over 22 years of experience, ensuring efficient execution and client satisfaction.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: KB,
      firstName: "Kulbhushan",
      lastName: "Rana",
      positions: ["Telecom Network Specialist"],
      fewWords:
        "Brings expertise in network planning, survey analysis, and quality control, delivering tailored solutions for client needs in the Telecom sector.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Pankaj,
      firstName: "Pankaj",
      lastName: "Singh",
      positions: ["GIS & Surveying Expert"],
      fewWords:
        "Manages GIS and field data operations, ensuring timely deliveries and precise technical solutions with over 8 years of experience.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Simran,
      firstName: "Simran",
      lastName: "Bhardwaj",
      positions: ["Assistant Manager"],
      fewWords:
        "Plays a pivotal role in the Telecom team, managing technical recruitments, team coordination, and project support to ensure the smooth execution of Telecom operations.",
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Sandeep,
      firstName: "Sandeep",
      lastName: "Sharma",
      positions: ["Full Stack Developer"],
      fewWords:
        " An experienced professional specializing in both front-end and back-end development, Sandeep is an expert in developing scalable web solutions, ensuring reliability and efficiency for massive user bases.",
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      // imageUrl:
      // "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageUrl: Ravi,
      firstName: "Ravi",
      lastName: "Chopra",
      positions: ["Web & Mobile App Developer"],
      fewWords:
        "He brings a wealth of expertise along with his deep understanding of front-end and back-end technologies that allows him to design and implement seamless, user-centric applications tailored to client needs.",
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Key Members of Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            {
              imageUrl,
              firstName,
              lastName,
              positions,
              socialNetworks,
              fewWords,
            },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    // style={{ objectFit: "contain" }}
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6 text-[22px] ml-[-10px]">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <>
                  <CardContent
                    key={index}
                    // className={`pb-0 text-muted-foreground ml-[-10px] ${
                    className={`pb-0 text-white font-bold ml-[-10px] ${
                      index === positions.length - 1 && "pb-6"
                    }`}
                  >
                    {position}
                    {index < positions.length - 1 && <span>,</span>}
                    <br />
                    <br />
                    <div className="text-sm text-muted-foreground font-normal">
                      {fewWords ? fewWords : null}
                    </div>
                  </CardContent>
                </>
              ))}

              <CardFooter className="space-x-4 mt-auto ml-[-10px]">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
