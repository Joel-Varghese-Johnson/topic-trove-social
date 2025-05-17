
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  // Mock data - in a real app this would come from API
  const userData = {
    name: 'Alex Johnson',
    streak: 7,
    points: 1250,
    goal: 85, // percentage
    recentActivity: [
      { id: 1, action: 'Completed topic', subject: 'Python - Beginner', topic: 'Lists and Dictionaries', points: 15, time: '2 hours ago' },
      { id: 2, action: 'Passed test', subject: 'JavaScript Fundamentals', topic: 'Weekly Assessment', points: 50, time: '1 day ago' },
      { id: 3, action: 'Added new subject', subject: 'Data Structures', topic: null, points: 5, time: '3 days ago' },
    ]
  };

  // Mock subjects data
  const subjects = [
    { id: 1, name: 'Python - Beginner', progress: 75, topics: 12, topicsCompleted: 9 },
    { id: 2, name: 'JavaScript Fundamentals', progress: 40, topics: 15, topicsCompleted: 6 },
    { id: 3, name: 'Data Structures', progress: 25, topics: 20, topicsCompleted: 5 },
  ];

  // Mock friends data
  const friends = [
    { id: 1, name: 'Taylor Swift', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1450, rank: 1 },
    { id: 2, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1325, rank: 2 },
    { id: 3, name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80', points: 1250, rank: 3 },
    { id: 4, name: 'Emily Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1100, rank: 4 },
    { id: 5, name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 950, rank: 5 },
  ];

  // Mock upcoming tests
  const upcomingTests = [
    { id: 1, name: 'Python Weekly Assessment', date: '2025-05-20', subject: 'Python - Beginner' },
    { id: 2, name: 'JavaScript Functions Quiz', date: '2025-05-22', subject: 'JavaScript Fundamentals' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {userData.name}</h2>
        <p className="text-muted-foreground">Here's an overview of your study progress and activities.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-orange-500">
              <path d="M5 11h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z"></path>
              <path d="M18 7v4H6V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{userData.streak} days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Points</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{userData.points}</div>
            <p className="text-xs text-muted-foreground">+65 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{userData.goal}%</div>
            <Progress value={userData.goal} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">#3</div>
            <p className="text-xs text-muted-foreground">Among your friends</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Current Subjects */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Current Subjects</CardTitle>
            <CardDescription>Your study progress by subject</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjects.map(subject => (
              <div key={subject.id} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">{subject.name}</p>
                    <p className="text-xs text-muted-foreground">{subject.topicsCompleted} of {subject.topics} topics completed</p>
                  </div>
                  <p className="text-sm font-medium">{subject.progress}%</p>
                </div>
                <Progress value={subject.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Friends Leaderboard */}
        <Card className="row-span-2">
          <CardHeader>
            <CardTitle>Friends Leaderboard</CardTitle>
            <CardDescription>See how you compare</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {friends.map(friend => (
                <div key={friend.id} className={`flex items-center justify-between p-2 rounded-md ${friend.id === 3 ? 'bg-secondary' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold text-sm w-5">{friend.rank}</div>
                    <div className="relative">
                      <img src={friend.avatar} alt={friend.name} className="rounded-full w-8 h-8 object-cover" />
                      {friend.rank === 1 && (
                        <span className="absolute -top-1 -right-1 text-xs">👑</span>
                      )}
                    </div>
                    <div className="text-sm font-medium">{friend.name}</div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {friend.points}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest study milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start space-x-3 border-b pb-3 last:border-0">
                  <div className="rounded-full bg-primary/10 p-2">
                    {activity.action === 'Completed topic' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    ) : activity.action === 'Passed test' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{activity.subject}</span>
                      {activity.topic && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{activity.topic}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="text-primary">+{activity.points} points</span>
                      <span className="mx-1">•</span>
                      <span className="text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tests */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tests</CardTitle>
            <CardDescription>Prepare for these assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map(test => (
                <div key={test.id} className="flex items-start space-x-3 border-b pb-3 last:border-0">
                  <div className="rounded-full bg-primary/10 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{test.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{test.subject}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="text-primary">{new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
