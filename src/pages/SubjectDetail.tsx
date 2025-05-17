
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Checkbox 
} from "@/components/ui/checkbox";
import { 
  Button 
} from "@/components/ui/button";
import { 
  Input 
} from "@/components/ui/input";
import { Progress } from '@/components/ui/progress';
import { useParams } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function SubjectDetail() {
  // In a real app, we'd fetch this data from an API using the subjectId param
  const { id } = useParams();
  const { toast } = useToast();
  
  // Mock data for the selected subject
  const [subject, setSubject] = useState({
    id: 1,
    name: 'Python - Beginner',
    description: 'Learn the fundamentals of Python programming language.',
    progress: 75,
    creator: 'Official Curriculum',
    lastStudied: '2025-05-16',
    estimatedTime: '20 hours',
    dateAdded: '2025-04-01',
    topics: [
      { id: 1, name: 'Introduction to Python', completed: true },
      { id: 2, name: 'Variables and Data Types', completed: true },
      { id: 3, name: 'Control Structures', completed: true },
      { id: 4, name: 'Functions', completed: true },
      { id: 5, name: 'Lists and Tuples', completed: true },
      { id: 6, name: 'Dictionaries', completed: true },
      { id: 7, name: 'Sets', completed: false },
      { id: 8, name: 'File I/O', completed: false },
      { id: 9, name: 'Exception Handling', completed: false },
      { id: 10, name: 'Modules and Packages', completed: false },
      { id: 11, name: 'Object-Oriented Programming', completed: false },
      { id: 12, name: 'Virtual Environments', completed: false },
    ]
  });

  // State for new topic form
  const [newTopicName, setNewTopicName] = useState('');

  // Toggle topic completion status
  const toggleTopic = (topicId: number) => {
    setSubject(prev => {
      const updatedTopics = prev.topics.map(topic => {
        if (topic.id === topicId) {
          const newStatus = !topic.completed;
          
          // Show toast notification
          if (newStatus) {
            toast({
              title: "Topic completed!",
              description: `You've earned 15 points for completing "${topic.name}"`,
            });
          }
          
          return { ...topic, completed: newStatus };
        }
        return topic;
      });
      
      // Calculate new progress
      const totalTopics = updatedTopics.length;
      const completedTopics = updatedTopics.filter(t => t.completed).length;
      const newProgress = Math.round((completedTopics / totalTopics) * 100);
      
      return {
        ...prev,
        topics: updatedTopics,
        progress: newProgress
      };
    });
  };

  // Add new topic
  const addNewTopic = () => {
    if (newTopicName.trim() === '') return;
    
    setSubject(prev => {
      // Get the highest ID and increment by 1
      const newId = Math.max(...prev.topics.map(t => t.id)) + 1;
      
      const updatedTopics = [
        ...prev.topics,
        { id: newId, name: newTopicName.trim(), completed: false }
      ];
      
      // Recalculate progress
      const totalTopics = updatedTopics.length;
      const completedTopics = updatedTopics.filter(t => t.completed).length;
      const newProgress = Math.round((completedTopics / totalTopics) * 100);
      
      toast({
        title: "Topic added",
        description: `"${newTopicName}" has been added to your study list`,
      });
      
      return {
        ...prev,
        topics: updatedTopics,
        progress: newProgress
      };
    });
    
    setNewTopicName('');
  };

  // Request AI suggestions
  const requestAiSuggestions = () => {
    // In a real app this would call an API to get AI suggestions
    toast({
      title: "AI Topic Suggestions",
      description: "Based on your current progress, consider adding 'Working with APIs', 'Decorators', and 'Python Testing'",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{subject.name}</h2>
          <p className="text-muted-foreground">{subject.description}</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Topic</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Topic</DialogTitle>
                <DialogDescription>
                  Add a custom topic to your study plan.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input
                    id="topic-name"
                    placeholder="Enter topic name"
                    value={newTopicName}
                    onChange={(e) => setNewTopicName(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={addNewTopic}>Add Topic</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="secondary" onClick={requestAiSuggestions}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            AI Suggest Topics
          </Button>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>
            {subject.topics.filter(t => t.completed).length} of {subject.topics.length} topics completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={subject.progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{subject.progress}% Complete</span>
              <div className="flex space-x-4">
                <span>Added: {new Date(subject.dateAdded).toLocaleDateString()}</span>
                <span>Last Studied: {new Date(subject.lastStudied).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Topics Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Study Checklist</CardTitle>
          <CardDescription>Mark topics as you complete them</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {subject.topics.map(topic => (
              <div key={topic.id} className="flex items-center space-x-2 border rounded-md p-3 card-hover">
                <Checkbox 
                  id={`topic-${topic.id}`}
                  checked={topic.completed}
                  onCheckedChange={() => toggleTopic(topic.id)}
                />
                <label 
                  htmlFor={`topic-${topic.id}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 ${topic.completed ? 'line-through text-muted-foreground' : ''}`}
                >
                  {topic.name}
                </label>
                {topic.completed && (
                  <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                    +15 points
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Study Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button className="w-48">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
          Start Study Session
        </Button>
        <Button variant="outline" className="w-48">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          Schedule Test
        </Button>
      </div>
    </div>
  );
}
