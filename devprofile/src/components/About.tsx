import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from 'src/styles/contributions.module.css';


const getContributionLevel = (count: number) => {
  if (count === 0) return 'fill-current text-gray-800'; // #252424 is close to Tailwind's gray-800
  if (count === 1) return 'fill-current text-green-100 '; // Very light green with low opacity
  if (count <= 3) return 'fill-current text-green-200 '; // Slightly more opaque
  if (count <= 5) return 'fill-current text-green-300 '; // Moderate opacity
  if (count <= 8) return 'fill-current text-green-400 '; // Darker green with more opacity
  if (count <= 10) return 'fill-current text-green-600 '; // Even darker green with near full opacity
  return 'fill-current text-green-900 opacity-100'; // Very deep green with full opacity
};

interface ContributionData {
  date: string;
  count: number;
}

type YearData = Record<string, ContributionData[]>;

const About: React.FC = () => {
  const router = useRouter();
  const renderedDates = new Set<string>();
  const [contributions, setContributions] = useState<YearData | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);



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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, [contributions]);

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

      <div className="absolute flex items-center justify-center p-1 rounded-lg" style={{ top: '40vh', left: '3%', width: '90%', height: '40%', zIndex: 1 }}>
        <img src="/Tools.svg" alt="Tools" className="w-half h-full rounded-lg" />

        {/* GitHub Contribution Chart */}
        <div
          ref={scrollContainerRef}
          className="absolute overflow-x-auto" style={{ top: '13vh', left: '65%', transform: 'translateX(-40%)', width: '45vw', height: '16vh', zIndex: 2 }}>
          <svg width="170%" height="100%" className={styles.contributionChart} style={{ backgroundColor: '#252424' }}>
            {contributions?.data?.user?.contributionsCollection ? (
              contributions.data.user.contributionsCollection.contributionCalendar.weeks.map((week, weekIndex) => (
                week.contributionDays.map((day, dayIndex) => {
                  // Check if the date has already been rendered
                  if (renderedDates.has(day.date)) {
                    return null; // Skip rendering this day
                  }
                  renderedDates.add(day.date); // Add the date to the Set

                  return (
                    <rect
                      key={`${weekIndex}-${dayIndex}`}
                      x={(weekIndex * 10 / 720) * 100 + '%'}
                      y={(dayIndex * 15 / 110) * 100 + '%'}
                      width={(16 / 710) * 100 + '%'}
                      height={(16 / 110) * 100 + '%'}
                      className={getContributionLevel(day.contributionCount)}
                      stroke="#D1D5DB"  // This is the color equivalent to border-gray-300 in Tailwind
                      strokeWidth="0.5"  // This sets a thin border
                    >
                      <title>{`${day.date}: ${day.contributionCount} contributions`}</title>
                    </rect>
                  );
                })
              ))
            ) : null}
          </svg>
        </div>

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


    </div>
  );
}

export default About;
