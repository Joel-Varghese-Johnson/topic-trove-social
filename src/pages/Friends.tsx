import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useToast } from "@/hooks/use-toast";

export default function Friends() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock friends data
  const [friends, setFriends] = useState([
    { 
      id: 1, 
      name: 'Emma Wilson', 
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      points: 1850,
      streak: 12,
      subjects: ['Python', 'Data Science', 'Machine Learning'],
      online: true
    },
    { 
      id: 2, 
      name: 'James Rodriguez', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      points: 2100,
      streak: 21,
      subjects: ['JavaScript', 'React', 'Web Development'],
      online: false
    },
    { 
      id: 3, 
      name: 'Sophia Chen', 
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      points: 1650,
      streak: 8,
      subjects: ['Biology', 'Chemistry', 'Physics'],
      online: true
    },
    { 
      id: 4, 
      name: 'Marcus Johnson', 
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      points: 1920,
      streak: 15,
      subjects: ['History', 'Literature', 'Philosophy'],
      online: false
    },
    { 
      id: 5, 
      name: 'Olivia Martinez', 
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      points: 2250,
      streak: 30,
      subjects: ['Mathematics', 'Statistics', 'Economics'],
      online: true
    }
  ]);
  
  // Mock friend requests
  const [friendRequests, setFriendRequests] = useState([
    { 
      id: 101, 
      name: 'Noah Williams', 
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      mutualFriends: 3
    },
    { 
      id: 102, 
      name: 'Ava Thompson', 
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      mutualFriends: 1
    }
  ]);
  
  // Mock suggested friends
  const suggestedFriends = [
    { 
      id: 201, 
      name: 'Ethan Davis', 
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      mutualFriends: 2,
      subjects: ['Computer Science', 'Artificial Intelligence']
    },
    { 
      id: 202, 
      name: 'Isabella Moore', 
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      mutualFriends: 4,
      subjects: ['Art History', 'Design']
    },
    { 
      id: 203, 
      name: 'Liam Johnson', 
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      mutualFriends: 1,
      subjects: ['Business', 'Marketing']
    }
  ];
  
  // Handle accepting friend request
  const acceptFriendRequest = (requestId: number) => {
    // Find the request
    const request = friendRequests.find(req => req.id === requestId);
    
    if (request) {
      // Add to friends
      setFriends(prev => [...prev, {
        id: request.id,
        name: request.name,
        avatar: request.avatar,
        points: Math.floor(Math.random() * 1000) + 1000,
        streak: Math.floor(Math.random() * 20) + 1,
        subjects: ['New Subject'],
        online: Math.random() > 0.5
      }]);
      
      // Remove from requests
      setFriendRequests(prev => prev.filter(req => req.id !== requestId));
      
      // Show toast
      toast({
        title: "Friend request accepted",
        description: `You are now friends with ${request.name}`,
      });
    }
  };
  
  // Handle rejecting friend request
  const rejectFriendRequest = (requestId: number) => {
    // Find the request for the name
    const requestName = friendRequests.find(req => req.id === requestId)?.name;
    
    // Remove from requests
    setFriendRequests(prev => prev.filter(req => req.id !== requestId));
    
    // Show toast
    toast({
      title: "Friend request rejected",
      description: requestName ? `Rejected request from ${requestName}` : "Request rejected",
    });
  };
  
  // Handle sending friend request
  const sendFriendRequest = (userId: number) => {
    // In a real app, this would send an API request
    const user = suggestedFriends.find(u => u.id === userId);
    
    if (user) {
      toast({
        title: "Friend request sent",
        description: `Request sent to ${user.name}`,
      });
    }
  };
  
  // Handle removing friend
  const removeFriend = (friendId: number) => {
    // Find the friend for the toast message
    const friendName = friends.find(f => f.id === friendId)?.name;
    
    // Remove from friends list
    setFriends(prev => prev.filter(friend => friend.id !== friendId));
    
    // Show toast
    toast({
      title: "Friend removed",
      description: friendName ? `${friendName} has been removed from your friends` : "Friend removed",
    });
  };
  
  // Filter friends based on search query
  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort friends by points for leaderboard
  const leaderboardFriends = [...friends].sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-medium tracking-tight">Friends</h2>
        <p className="text-muted-foreground">Connect with friends and study together.</p>
      </div>
      
      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="friends">My Friends</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="requests">Requests {friendRequests.length > 0 && `(${friendRequests.length})`}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="friends" className="space-y-4">
          <div className="flex justify-between">
            <Input
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredFriends.map(friend => (
              <ContextMenu key={friend.id}>
                <ContextMenuTrigger>
                  <Card className="overflow-hidden">
                    <CardHeader className="p-4 pb-2 flex flex-row items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {friend.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-base">{friend.name}</CardTitle>
                        <CardDescription className="text-xs">
                          {friend.streak} day streak • {friend.points} points
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex flex-wrap gap-1 mt-1">
                        {friend.subjects.map((subject, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">Message</Button>
                        <Button variant="outline" size="sm">Study Together</Button>
                      </div>
                    </CardContent>
                  </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>View Profile</ContextMenuItem>
                  <ContextMenuItem>Send Message</ContextMenuItem>
                  <ContextMenuItem>Invite to Study</ContextMenuItem>
                  <ContextMenuItem 
                    className="text-red-600"
                    onClick={() => removeFriend(friend.id)}
                  >
                    Remove Friend
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
          
          {filteredFriends.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No friends found matching your search.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle>Friend Leaderboard</CardTitle>
              <CardDescription>See how you and your friends rank based on study points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboardFriends.map((friend, index) => (
                  <div 
                    key={friend.id} 
                    className="flex items-center justify-between p-3 rounded-md border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-sm font-medium">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{friend.name}</p>
                        <p className="text-xs text-muted-foreground">{friend.streak} day streak</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold">{friend.points}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Friend Requests</CardTitle>
              <CardDescription>People who want to connect with you</CardDescription>
            </CardHeader>
            <CardContent>
              {friendRequests.length > 0 ? (
                <div className="space-y-3">
                  {friendRequests.map(request => (
                    <div key={request.id} className="flex items-center justify-between p-3 rounded-md border">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={request.avatar} alt={request.name} />
                          <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{request.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {request.mutualFriends} mutual {request.mutualFriends === 1 ? 'friend' : 'friends'}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => acceptFriendRequest(request.id)}
                        >
                          Accept
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => rejectFriendRequest(request.id)}
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-muted-foreground">No pending friend requests.</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Suggested Friends</CardTitle>
              <CardDescription>People you might want to connect with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {suggestedFriends.map(person => (
                  <div key={person.id} className="flex flex-col gap-3 p-4 rounded-md border">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={person.avatar} alt={person.name} />
                        <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{person.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {person.mutualFriends} mutual {person.mutualFriends === 1 ? 'friend' : 'friends'}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {person.subjects.map((subject, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendFriendRequest(person.id)}
                    >
                      Send Request
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
