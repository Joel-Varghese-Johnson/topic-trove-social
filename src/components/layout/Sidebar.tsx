
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  // Mock user stats
  const stats = {
    streak: 7,
    todayMinutes: 120,
    weeklyGoal: '85%',
    totalPoints: 1250
  };
  
  // Mock subjects being studied
  const currentSubjects = [
    { id: 1, name: 'Python - Beginner', progress: 75 },
    { id: 2, name: 'JavaScript Fundamentals', progress: 40 },
    { id: 3, name: 'Data Structures', progress: 25 },
  ];

  return (
    <div className={cn("w-60 border-r border-neutral-200 bg-white hidden md:block", className)}>
      <div className="flex flex-col h-full">
        <div className="p-3 mb-2">
          <div className="text-xs text-neutral-500 font-medium px-3 py-1">STATS</div>
          <div className="grid grid-cols-2 gap-1 mt-1 px-1">
            <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-neutral-100">
              <span className="text-neutral-600">Streak</span>
              <span className="font-medium">{stats.streak} days</span>
            </div>
            <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-neutral-100">
              <span className="text-neutral-600">Today</span>
              <span className="font-medium">{stats.todayMinutes} min</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 flex-1 overflow-auto">
          <div className="text-xs text-neutral-500 font-medium px-3 py-1">SUBJECTS</div>
          <div className="flex flex-col gap-0.5 mt-1">
            {currentSubjects.map(subject => (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="flex flex-col gap-1 px-3 py-2 text-sm rounded-md hover:bg-neutral-100"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{subject.name}</span>
                  <span className="text-xs text-neutral-500">{subject.progress}%</span>
                </div>
                <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-neutral-800" 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </Link>
            ))}
            <Link
              to="/subjects/new"
              className="flex items-center gap-1 px-3 py-2 mt-1 text-sm text-neutral-500 rounded-md hover:bg-neutral-100 hover:text-neutral-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New Subject
            </Link>
          </div>
        </div>
        
        <div className="p-3 mt-auto border-t border-neutral-200">
          <div className="text-xs text-neutral-500 font-medium px-3 py-1">QUICK ACCESS</div>
          <div className="flex flex-col gap-0.5 mt-1">
            <Link
              to="/tests/upcoming"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
              Upcoming Tests
            </Link>
            <Link
              to="/friends/leaderboard"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Leaderboard
            </Link>
            <Link
              to="/study-space"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-neutral-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Study Space
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
