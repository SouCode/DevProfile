import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from 'src/styles/contributions.module.css';


const getContributionLevel = (count: number) => {
  if (count === 0) return 'fill-current text-[#2b2b2a]'; // #161B22
  if (count === 1) return 'fill-current text-[#0e4429]'; // #0e4429
  if (count <= 3) return 'fill-current text-[#006d32]'; // #006d32
  if (count <= 5) return 'fill-current text-[#26a641]'; // #26a641
  if (count <= 8) return 'fill-current text-[#39d353]'; // #39d353
  if (count <= 10) return 'fill-current text-[#39d353]'; // Using the darkest color for counts > 8
  return 'fill-current text-[#39d353]'; // Using the darkest color for counts > 10
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
  const uniqueDays = new Set<string>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/contributions?user=SouCode`);
        let data = await response.json();
        console.log(data);  // Log the data to inspect its structure

        // Remove duplicates
        data.data.user.contributionsCollection.contributionCalendar.weeks.forEach(week => {
          week.contributionDays = week.contributionDays.filter(day => {
            if (uniqueDays.has(day.date)) {
              return false;
            }
            uniqueDays.add(day.date);
            return true;
          });
        });

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
          <svg width={`${contributions?.data?.user?.contributionsCollection?.contributionCalendar?.weeks?.length * 20}px`} height="100%" className={styles.contributionChart} style={{ backgroundColor: '#252424' }}>
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
                      x={(weekIndex * 18) + 'px'}
                      y={(dayIndex * 15 / 110) * 100 + '%'}
                      width="17px"
                      height={(16 / 110) * 100 + '%'}
                      className={getContributionLevel(day.contributionCount)}
                      stroke="#0d0f0b"
                      strokeWidth="0.8"
                      rx="2"  // This gives the rectangle rounded corners on the x-axis
                      ry="2"  // This gives the rectangle rounded corners on the y-axis
                    >
                      <title>{`${day.date}: ${day.contributionCount} contributions`}</title>
                    </rect>

                  );
                })
              ))
            ) : null}
          </svg>
        </div>

        {/* GitHub Contribution Chart Legend */}
        <div className="absolute flex items-center space-x-2" style={{ top: '30vh', left: '87%', transform: 'translateX(-40%)' }}>
          <span className="text-white">Less</span>
          {[0, 1, 3, 5, 8].map((count, index) => (
            <svg key={index} width="10" height="10" className="d-inline-block">
              <rect
                width="10"
                height="10"
                className={getContributionLevel(count)}
                rx="2"
                ry="2"
              ></rect>
            </svg>
          ))}
          <span className="text-white">More</span>
        </div>

        {/* Days (Monday, Wednesday, Friday) */}
        <div style={{ position: 'absolute', zIndex: 4 }}>
          <span aria-hidden="true" style={{ clipPath: 'None', position: 'absolute', top: '-6vh', left: '-8.5vw', color: 'white' }}>Mon</span>
          <span aria-hidden="true" style={{ clipPath: 'None', position: 'absolute', top: '-1vh', left: '-8.5vw', color: 'white' }}>Wed</span>
          <span aria-hidden="true" style={{ clipPath: 'None', position: 'absolute', top: '4vh', left: '-8.3vw', color: 'white' }}>Fri</span>
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
