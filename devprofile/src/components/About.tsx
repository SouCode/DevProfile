/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from 'src/styles/contributions.module.css';

const getContributionLevel = (count: number): string => {
  if (count === 0) return 'fill-current text-[#2b2b2a]';
  if (count === 1) return 'fill-current text-[#0e4429]';
  if (count <= 3) return 'fill-current text-[#006d32]';
  if (count <= 5) return 'fill-current text-[#26a641]';
  if (count <= 8) return 'fill-current text-[#39d353]';
  if (count <= 10) return 'fill-current text-[#39d353]';
  return 'fill-current text-[#39d353]';
};

interface ContributionWeek {
  contributionDays: ContributionData[];
}

interface ContributionCalendar {
  weeks: ContributionWeek[];
}

interface UserData {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
}

interface ContributionResponse {
  data: {
    user: UserData;
  };
}

interface ContributionData {
  date: string;
  contributionCount: number;
}



type YearData = ContributionResponse;

const ContributionCalendar: React.FC<{ contributions: YearData | null }> = ({ contributions }) => {
  const renderedDates = new Set<string>();
  const svgWidth = contributions?.data?.user?.contributionsCollection?.contributionCalendar?.weeks?.length
    ? `${contributions.data.user.contributionsCollection.contributionCalendar.weeks.length * 20}px`
    : '0px';

  return (
    <svg width={svgWidth} height="100%" className={styles.contributionChart} style={{ backgroundColor: '#252424' }}>
      {contributions?.data?.user?.contributionsCollection?.contributionCalendar?.weeks.map((week, weekIndex) => (
        week.contributionDays.map((day: ContributionData, dayIndex: number) => {
          if (renderedDates.has(day.date)) return null;
          renderedDates.add(day.date);
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
              rx="2"
              ry="2"
            >

              <title>{`${day.date}: ${day.contributionCount} contributions`}</title>
            </rect>
          );
        })
      ))}
    </svg>
  );
};

const About: React.FC = () => {
  const router = useRouter();
  const [contributions, setContributions] = useState<YearData | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      if (fetchedRef.current) return;

      try {
        const url = `/api/contributions?user=SouCode`;
        const response = await fetch(url);
        const data = await response.json();

        setContributions(data);
        fetchedRef.current = true;
      } catch (error) {
        console.error("Error fetching contribution data:", error);
      }
    };
    void fetchData();
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

        <div
          ref={scrollContainerRef}
          className="absolute overflow-x-auto" style={{ top: '13vh', left: '65%', transform: 'translateX(-40%)', width: '43vw', height: '16vh', zIndex: 3 }}>
          {contributions ? <ContributionCalendar contributions={contributions} /> : <p>Loading contributions...</p>}
        </div>


        {/* Months (January to December) 
        <div style={{ position: 'absolute', top: '10vh', left: '57%', transform: 'translateX(-30%)', zIndex: 4 }}>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '0vw', color: 'white' }}>Jan</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '3.5vw', color: 'white' }}>Feb</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '7vw', color: 'white' }}>Mar</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '10.5vw', color: 'white' }}>Apr</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '14vw', color: 'white' }}>May</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '17.5vw', color: 'white' }}>Jun</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '21vw', color: 'white' }}>Jul</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '24.5vw', color: 'white' }}>Aug</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '28vw', color: 'white' }}>Sep</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '31.5vw', color: 'white' }}>Oct</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '35vw', color: 'white' }}>Nov</span>
          <span aria-hidden="true" className="text-sm" style={{ position: 'absolute', left: '38.5vw', color: 'white' }}>Dec</span>
        </div>
        */}



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

        <div style={{ position: 'absolute', zIndex: 2 }}>
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
