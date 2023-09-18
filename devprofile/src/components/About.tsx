import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/contributions.css';


interface ContributionData {
  date: string;
  count: number;
}

type YearData = Record<string, ContributionData[]>;

const About: React.FC = () => {
  const router = useRouter();
  const [contributions, setContributions] = useState<YearData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/contributions?user=SouCode`);
        const data = await response.json();
        console.log(data);  // Log the data to inspect its structure
        setContributions(data);
      } catch (error) {
        console.error("Error fetching contribution data:", error);
      }
    };

    fetchData();
  }, []);


  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-white relative border-r-8 border-black">
      <div className="absolute top-6 left-5 w-20% h-1/3 flex items-center justify-center">
        <img src="/SouPicFrame.svg" alt="Sou Pic Frame" className="w-[100%] h-[100%]" />
      </div>

      <div
        className="bg-white absolute flex items-center justify-center p-4"
        style={{
          width: '60vw',
          height: '34vh',
          top: '3vh',
          left: '68%',
          transform: 'translateX(-50%)',
          borderWidth: '6px',
          borderColor: 'black',
          borderStyle: 'solid'
        }}
      >
        <p>Im a Network Engineer with a passion for software development and Cybersecurity.
          I am a recent graduate from General Assembly Coding bootcamp.
          Proficient in Next.js and currently learning React Native for mobile app development.
          Lets connect and collaborate to shape a more convenient future through technology.</p>
      </div>

      <div className="absolute flex items-center justify-center p-1 rounded-lg" style={{ top: '40vh', left: '3%', width: '90%', height: '40%' }}>
        <img src="/tools.svg" alt="Tools" className="w-half h-full rounded-lg" />
      </div>

      <div className="absolute flex items-center justify-center p-1 rounded-lg" style={{ top: '78vh', left: '1vw', width: '44vw', height: '20vh' }}>
        <img src="/Certification.svg" alt="Certifications" className="w-full h-full" />
      </div>

      <div
        className="absolute flex items-center justify-center p-1 rounded-lg cursor-pointer"
        style={{
          top: '79vh',
          left: '59vw',
          width: '45vw',
          height: '16vh'
        }}
        onClick={() => {
          scrollToSection("#work");
          void router.push("/#work");
        }}
      >
        <img src="/ToBeContinued.svg" alt="To Be Continued" className="w-full h-full" />
      </div>

      {/* GitHub Contribution Graph */}
      <div className="absolute" style={{ top: '44%', left: '43%', width: '592.528px', height: '190.267px' }}>
        {contributions && contributions.data && contributions.data.user && contributions.data.user.contributionsCollection ? (
          <>
            <h3>Total Contributions: {contributions.data.user.contributionsCollection.contributionCalendar.totalContributions}</h3>
            {contributions.data.user.contributionsCollection.contributionCalendar.weeks.map((week, index) => (
              <div key={index}>
                {week.contributionDays.map((day) => (
                  <li key={day.date}>
                    {day.date}: {day.contributionCount} contributions
                  </li>
                ))}
              </div>
            ))}
          </>
        ) : (
          <p>Loading GitHub contributions...</p>
        )}
      </div>

    </div>
  );
}

export default About;
