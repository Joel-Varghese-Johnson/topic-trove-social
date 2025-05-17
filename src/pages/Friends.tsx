
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Input 
} from "@/components/ui/input";
import {
  Button
} from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from "@/hooks/use-toast";

export default function Friends() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock friends data
  const friendsList = [
    { id: 1, name: 'Taylor Swift', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1450, rank: 1, studyingNow: 'Music Theory', lastActive: '2 hours ago' },
    { id: 2, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1325, rank: 2, studyingNow: 'Machine Learning', lastActive: '5 minutes ago' },
    { id: 4, name: 'Emily Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1100, rank: 4, studyingNow: 'Not studying', lastActive: '1 day ago' },
    { id: 5, name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 950, rank: 5, studyingNow: 'Spanish', lastActive: '3 hours ago' },
  ];

  // Mock suggested users
  const suggestedUsers = [
    { id: 6, name: 'Sarah Wilson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1050, commonFriends: 2, subjects: ['JavaScript', 'React'] },
    { id: 7, name: 'David Park', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 890, commonFriends: 1, subjects: ['Python', 'Data Science'] },
    { id: 8, name: 'Lisa Thompson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', points: 1200, commonFriends: 3, subjects: ['UX Design', 'HTML/CSS'] },
  ];

  // Mock leaderboard data (combining friends + user)
  const leaderboardData = [
    ...friendsList,
    { id: 3, name: 'Alex Johnson (You)', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80', points: 1250, rank: 3, studyingNow: null, lastActive: 'Now' }
  ].sort((a, b) => b.points - a.points);

  // Mock search results based on search query
  const searchResults = suggestedUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle add friend action
  const handleAddFriend = (userId: number) => {
    toast({
      title: "Friend request sent!",
      description: "They'll need to accept your request to connect.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Friends & Study Partners</h2>
        <p className="text-muted-foreground">Connect with others and compete on the leaderboard.</p>
      </div>

      <Tabs defaultValue="friends">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="friends">My Friends</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="find">Find Friends</TabsTrigger>
        </TabsList>
        
        {/* Friends Tab */}
        <TabsContent value="friends" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>My Study Partners</CardTitle>
              <CardDescription>See what your friends are studying</CardDescription>
            </CardHeader>
            <CardContent>
              {friendsList.length > 0 ? (
                <div className="space-y-4">
                  {friendsList.map(friend => (
                    <div key={friend.id} className="flex items-center justify-between p-3 rounded-md border">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{friend.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span className="flex items-center">
                              {friend.studyingNow !== 'Not studying' ? (
                                <>
                                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                                  Studying: {friend.studyingNow}
                                </>
                              ) : (
                                <>
                                  <span className="h-2 w-2 rounded-full bg-gray-300 mr-1"></span>
                                  Not studying
                                </>
                              )}
                            </span>
                            <span className="mx-1">•</span>
                            <span>Active {friend.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-primary flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          {friend.points}
                        </div>
                        <Button variant="outline" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You haven't added any friends yet.</p>
                  <Button className="mt-4" onClick={() => document.querySelector('[data-value="find"]')?.click()}>
                    Find Friends
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Study Points Leaderboard</CardTitle>
              <CardDescription>How do you rank against your friends?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.map((person, index) => (
                  <div 
                    key={person.id} 
                    className={`flex items-center justify-between p-3 rounded-md ${
                      person.name.includes('(You)') ? 'bg-secondary' : 'border'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="font-bold text-sm w-5">{index + 1}</div>
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {index === 0 && (
                          <span className="absolute -top-1 -right-1 text-xs">👑</span>
                        )}
                      </div>
                      <div className="text-sm font-medium">{person.name}</div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      {person.points}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Find Friends Tab */}
        <TabsContent value="find" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Find Study Partners</CardTitle>
              <CardDescription>Connect with people studying similar subjects</CardDescription>
              <div className="mt-4">
                <Input
                  placeholder="Search by name or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Suggested For You</h3>
                
                {(searchQuery === '' ? suggestedUsers : searchResults).map(user => (
                  <div key={user.id} className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Studies: {user.subjects.join(', ')}</span>
                          <span className="mx-1">•</span>
                          <span>{user.commonFriends} mutual friends</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" onClick={() => handleAddFriend(user.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 16v-2"></path>
                        <path d="M20 14v4"></path>
                      </svg>
                      Add Friend
                    </Button>
                  </div>
                ))}
                
                {searchQuery !== '' && searchResults.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No users found matching "{searchQuery}".</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
