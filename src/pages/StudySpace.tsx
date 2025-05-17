
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from "@/hooks/use-toast";

export default function StudySpace() {
  const { toast } = useToast();
  const [messageText, setMessageText] = useState('');
  const [noteText, setNoteText] = useState('');

  // Mock active study sessions
  const activeSessions = [
    { 
      id: 1, 
      name: 'Python Study Group', 
      participants: 3, 
      subject: 'Python - Beginner', 
      status: 'active',
      creator: 'John Doe',
      members: [
        { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3', status: 'active' },
        { name: 'Taylor Swift', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3', status: 'active' },
        { name: 'Emily Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3', status: 'away' },
        { name: 'You', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3', status: 'active' },
      ]
    },
    { 
      id: 2, 
      name: 'JavaScript Fundamentals', 
      participants: 2, 
      subject: 'JavaScript Fundamentals', 
      status: 'active',
      creator: 'Michael Brown',
      members: [
        { name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3', status: 'active' },
        { name: 'Emily Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3', status: 'active' },
        { name: 'You', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3', status: 'active' },
      ]
    }
  ];

  // Mock chat messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3', content: 'Hey everyone! Let\'s work on lists and dictionaries today.', time: '10:15 AM' },
    { id: 2, sender: 'Taylor Swift', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3', content: 'I\'m stuck on dictionary comprehensions. Can someone explain?', time: '10:17 AM' },
    { id: 3, sender: 'John Doe', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3', content: 'Sure! Dictionary comprehensions are similar to list comprehensions but create dictionaries. Here\'s an example: {x: x**2 for x in range(5)}', time: '10:20 AM' },
    { id: 4, sender: 'Emily Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3', content: 'I found this resource really helpful: https://realpython.com/python-dicts/', time: '10:22 AM' },
  ]);

  // Mock shared notes
  const [notes, setNotes] = useState([
    { id: 1, author: 'John Doe', content: '# Python Dictionaries\n\n- Key-value pairs\n- Unordered\n- Use `dict()` or `{}` to create\n- Mutable', time: '10:30 AM' },
    { id: 2, author: 'Taylor Swift', content: '## Dictionary Methods\n\n- `keys()`: Returns a view object with all keys\n- `values()`: Returns a view object with all values\n- `items()`: Returns a view object with key-value tuples', time: '10:45 AM' },
  ]);

  // Send a message
  const sendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
      content: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  // Add a note
  const addNote = () => {
    if (!noteText.trim()) return;
    
    const newNote = {
      id: notes.length + 1,
      author: 'You',
      content: noteText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setNotes([...notes, newNote]);
    setNoteText('');
    
    toast({
      title: "Note added",
      description: "Your note has been shared with the study group.",
    });
  };

  // Create new study session
  const createStudySession = () => {
    toast({
      title: "Study Session Created",
      description: "You can now invite friends to join your study session.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Study Space</h2>
        <p className="text-muted-foreground">Collaborate with friends in virtual study sessions.</p>
      </div>

      {/* Active Sessions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeSessions.map(session => (
          <Card key={session.id} className="card-hover">
            <CardHeader>
              <CardTitle>{session.name}</CardTitle>
              <CardDescription>{session.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2 mb-4">
                {session.members.slice(0, 4).map((member, i) => (
                  <Avatar key={i} className={`border-2 border-background ${member.name === 'You' ? 'ring-2 ring-primary' : ''}`}>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
                {session.members.length > 4 && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium">
                    +{session.members.length - 4}
                  </div>
                )}
              </div>
              <div className="text-sm">
                <p><span className="font-medium">Created by:</span> {session.creator}</p>
                <p><span className="font-medium">Participants:</span> {session.members.length} members</p>
                <div className="flex items-center mt-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-muted-foreground">Active now</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Join Session</Button>
            </CardFooter>
          </Card>
        ))}
        
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Create New Session</CardTitle>
            <CardDescription>Start a virtual study room</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground mb-4">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <Button onClick={createStudySession}>Create Study Session</Button>
          </CardContent>
        </Card>
      </div>

      {/* Active Study Room */}
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Python Study Group</CardTitle>
              <CardDescription>4 participants</CardDescription>
            </div>
            <div className="flex -space-x-2">
              {activeSessions[0].members.slice(0, 4).map((member, i) => (
                <Avatar key={i} className="border-2 border-background">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chat">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="notes">Shared Notes</TabsTrigger>
            </TabsList>

            {/* Chat Tab */}
            <TabsContent value="chat" className="mt-4">
              <div className="flex flex-col h-[400px]">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {messages.map(message => (
                      <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] flex ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'}`}>
                          {message.sender !== 'You' && (
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src={message.avatar} alt={message.sender} />
                              <AvatarFallback>{message.sender[0]}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div className={`px-4 py-2 rounded-lg ${
                              message.sender === 'You' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted'
                            }`}>
                              <p className="text-sm">{message.content}</p>
                            </div>
                            <div className={`text-xs text-muted-foreground mt-1 ${
                              message.sender === 'You' ? 'text-right' : 'text-left'
                            }`}>
                              {message.sender !== 'You' && <span className="font-medium">{message.sender}</span>}
                              <span> • {message.time}</span>
                            </div>
                          </div>
                          {message.sender === 'You' && (
                            <Avatar className="h-8 w-8 ml-2">
                              <AvatarImage src={message.avatar} alt={message.sender} />
                              <AvatarFallback>{message.sender[0]}</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-4 flex items-center">
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button className="ml-2" onClick={sendMessage}>Send</Button>
                </div>
              </div>
            </TabsContent>

            {/* Notes Tab */}
            <TabsContent value="notes" className="mt-4">
              <div className="flex flex-col h-[400px]">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-6">
                    {notes.map(note => (
                      <div key={note.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{note.author}</span>
                          <span className="text-xs text-muted-foreground">{note.time}</span>
                        </div>
                        <div className="whitespace-pre-wrap">{note.content}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-4">
                  <Textarea
                    placeholder="Add study notes to share with the group..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button className="mt-2" onClick={addNote}>Share Notes</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
