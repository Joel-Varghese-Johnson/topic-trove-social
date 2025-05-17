
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
    <div className={cn("pb-12 w-64 bg-white border-r hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Stats
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center rounded-md border p-3 hover:bg-accent">
              <span className="text-xs text-muted-foreground">Streak</span>
              <span className="font-bold text-orange-500">{stats.streak} days</span>
            </div>
            <div className="flex flex-col items-center rounded-md border p-3 hover:bg-accent">
              <span className="text-xs text-muted-foreground">Today</span>
              <span className="font-bold text-green-500">{stats.todayMinutes} min</span>
            </div>
            <div className="flex flex-col items-center rounded-md border p-3 hover:bg-accent">
              <span className="text-xs text-muted-foreground">Weekly Goal</span>
              <span className="font-bold text-blue-500">{stats.weeklyGoal}</span>
            </div>
            <div className="flex flex-col items-center rounded-md border p-3 hover:bg-accent">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="font-bold text-primary">{stats.totalPoints}</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Current Subjects
          </h2>
          <div className="space-y-1">
            {currentSubjects.map(subject => (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="group flex w-full items-center rounded-md border px-2 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-xs text-muted-foreground">{subject.progress}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
            <Link
              to="/subjects/new"
              className="flex w-full items-center justify-center rounded-md border border-dashed px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add New Subject
            </Link>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Quick Links
          </h2>
          <div className="space-y-1">
            <Link
              to="/tests/upcoming"
              className="group flex w-full items-center rounded-md border px-2 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
                <path d="m9 16 2 2 4-4"></path>
              </svg>
              Upcoming Tests
            </Link>
            <Link
              to="/friends/leaderboard"
              className="group flex w-full items-center rounded-md border px-2 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Leaderboard
            </Link>
            <Link
              to="/study-space"
              className="group flex w-full items-center rounded-md border px-2 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
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
