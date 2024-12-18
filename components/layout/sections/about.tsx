import pilot from "@/public/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container sm:pb-24">
      {/* <div className="bg-muted/50 border rounded-lg py-12"> */}
      <div className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number rounded-lg py-12 border bg-card text-card-foreground shadow-sm border-secondary">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot.src}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Designing Solutions
              </h2>
              <div className="text-sm text-muted-foreground mt-4">
                <span className="font-bold text-white">
                  A Legacy of Excellence
                </span>
                <br />
                Founded over 17 years ago, Designing Solutions has grown into a
                trusted global provider of innovative technology services. With
                roots in both Canada and India, we’ve built a reputation for
                delivering customized solutions that empower businesses across
                diverse industries.
                <br />
                <br />
                <span className="font-bold text-white">
                  Our Two Core Verticals
                </span>
                <br />
                <br />
                <ul className="list-disc pl-6 space-y-2">
                  <li className="font-bold text-white">Telecom Expertise:</li>
                  <p>
                    Designing Solutions has established itself as a trusted
                    partner to industry leaders like Airtel, Jio, Adani,
                    Vodafone, and more. We specialize in providing comprehensive
                    services, including surveys, network planning, and
                    implementation support. Our expertise in tools like AutoCAD
                    and GIS ensures precision and efficiency in every project.
                    With a proven track record of delivering results, we help
                    telecom giants optimize their operations and achieve their
                    goals.
                  </p>
                  <li className="font-bold text-white">IT Innovation:</li>
                  <p>
                    Expanding into the IT domain, we’ve become a leader in
                    creating tailored digital solutions, including web and
                    mobile app development, eCommerce platforms, and
                    enterprise-grade software. Our IT services focus on helping
                    businesses thrive in an ever-evolving digital landscape.
                    With a commitment to innovation and client satisfaction,
                    Designing Solutions is your partner for reliable,
                    transformative, and impactful solutions.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
