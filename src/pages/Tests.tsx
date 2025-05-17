
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
import {
  Button
} from "@/components/ui/button";
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
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

export default function Tests() {
  const { toast } = useToast();
  
  // Mock upcoming tests
  const upcomingTests = [
    { 
      id: 1, 
      name: 'Python Weekly Assessment', 
      date: '2025-05-20', 
      subject: 'Python - Beginner',
      topics: ['Lists and Dictionaries', 'Control Structures', 'Functions'],
      estimatedTime: '20 min',
      questions: 10
    },
    { 
      id: 2, 
      name: 'JavaScript Functions Quiz', 
      date: '2025-05-22', 
      subject: 'JavaScript Fundamentals',
      topics: ['Functions', 'Scope', 'Closures'],
      estimatedTime: '15 min',
      questions: 8
    },
  ];

  // Mock past test results
  const pastTests = [
    { 
      id: 101, 
      name: 'Python Basics', 
      date: '2025-05-10', 
      subject: 'Python - Beginner',
      score: 85,
      pointsEarned: 50,
      questions: 10,
      correct: 8.5
    },
    { 
      id: 102, 
      name: 'JavaScript Intro', 
      date: '2025-05-05', 
      subject: 'JavaScript Fundamentals',
      score: 70,
      pointsEarned: 35,
      questions: 10,
      correct: 7
    },
    { 
      id: 103, 
      name: 'Data Types Quiz', 
      date: '2025-05-01', 
      subject: 'Python - Beginner',
      score: 90,
      pointsEarned: 55,
      questions: 10,
      correct: 9
    },
  ];

  // Mock test for the demo
  const demoTest = {
    id: 999,
    name: 'Python Weekly Assessment',
    subject: 'Python - Beginner',
    questions: [
      {
        id: 1,
        text: 'What Python data structure would you use to store key-value pairs?',
        options: [
          { id: 'a', text: 'List' },
          { id: 'b', text: 'Dictionary' },
          { id: 'c', text: 'Tuple' },
          { id: 'd', text: 'Set' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 2,
        text: 'Which of the following is NOT a valid way to create a list in Python?',
        options: [
          { id: 'a', text: 'my_list = []' },
          { id: 'b', text: 'my_list = list()' },
          { id: 'c', text: 'my_list = {1, 2, 3}' },
          { id: 'd', text: 'my_list = [x for x in range(5)]' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 3,
        text: 'What is the output of the following code?\nprint(2 ** 3)',
        options: [
          { id: 'a', text: '6' },
          { id: 'b', text: '8' },
          { id: 'c', text: '5' },
          { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
      }
    ]
  };

  // State for active test
  const [activeTest, setActiveTest] = useState<null | typeof demoTest>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [testResults, setTestResults] = useState<null | { score: number, correct: number, total: number, points: number }>(null);

  const startTest = (testId: number) => {
    // In a real app, we would fetch the test from an API
    setActiveTest(demoTest);
    setSelectedAnswers({});
    setTestResults(null);
  };

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const submitTest = () => {
    // Calculate results
    const totalQuestions = activeTest?.questions.length || 0;
    const correctAnswers = activeTest?.questions.reduce((acc, question) => {
      return selectedAnswers[question.id] === question.correctAnswer ? acc + 1 : acc;
    }, 0) || 0;
    
    const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);
    const pointsEarned = Math.round(scorePercent / 2); // Simplified scoring logic
    
    setTestResults({
      score: scorePercent,
      correct: correctAnswers,
      total: totalQuestions,
      points: pointsEarned
    });

    toast({
      title: "Test completed!",
      description: `You scored ${scorePercent}% and earned ${pointsEarned} points.`,
    });
  };

  const requestAiTest = () => {
    toast({
      title: "AI Test Generation",
      description: "Based on your study progress, a new test is being generated for JavaScript Fundamentals.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tests & Assessments</h2>
          <p className="text-muted-foreground">Track your understanding with regular tests.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={requestAiTest}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            Generate AI Test
          </Button>
        </div>
      </div>

      {/* If a test is active, show the test interface */}
      {activeTest && !testResults ? (
        <Card>
          <CardHeader>
            <CardTitle>{activeTest.name}</CardTitle>
            <CardDescription>{activeTest.subject}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {activeTest.questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <div className="font-medium">
                    Question {question.id}: {question.text}
                  </div>
                  <RadioGroup 
                    value={selectedAnswers[question.id]} 
                    onValueChange={(value) => handleAnswerSelect(question.id, value)}
                  >
                    <div className="space-y-2">
                      {question.options.map(option => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.id} id={`q${question.id}-${option.id}`} />
                          <Label htmlFor={`q${question.id}-${option.id}`}>{option.text}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTest(null)}>Cancel</Button>
            <Button onClick={submitTest}>Submit Test</Button>
          </CardFooter>
        </Card>
      ) : activeTest && testResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>{activeTest.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-4xl font-bold mb-2 text-primary">{testResults.score}%</div>
              <p className="text-muted-foreground">
                You answered {testResults.correct} out of {testResults.total} questions correctly.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-muted/30">
              <div className="flex justify-between items-center">
                <span>Points earned:</span>
                <span className="font-semibold text-primary">+{testResults.points} points</span>
              </div>
            </div>
            
            {/* Test review would go here in a real implementation */}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => setActiveTest(null)}>Back to Tests</Button>
          </CardFooter>
        </Card>
      ) : (
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Tests</TabsTrigger>
            <TabsTrigger value="past">Past Results</TabsTrigger>
          </TabsList>
          
          {/* Upcoming Tests Tab */}
          <TabsContent value="upcoming" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingTests.map(test => (
                <Card key={test.id} className="card-hover">
                  <CardHeader>
                    <CardTitle>{test.name}</CardTitle>
                    <CardDescription>{test.subject}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Date:</span>
                        <span className="font-medium">{new Date(test.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Topics:</span>
                        <span className="font-medium text-right">{test.topics.join(', ')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Questions:</span>
                        <span className="font-medium">{test.questions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estimated time:</span>
                        <span className="font-medium">{test.estimatedTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => startTest(test.id)} 
                      className="w-full"
                    >
                      Take Test Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {upcomingTests.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <p className="text-muted-foreground mb-4">You don't have any upcoming tests.</p>
                  <Button onClick={requestAiTest}>Generate AI Test</Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Past Tests Tab */}
          <TabsContent value="past" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {pastTests.map(test => (
                <Card key={test.id}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{test.name}</CardTitle>
                        <CardDescription>{test.subject}</CardDescription>
                      </div>
                      <div className={`text-xl font-bold ${
                        test.score >= 80 ? 'text-green-500' : 
                        test.score >= 60 ? 'text-amber-500' : 
                        'text-red-500'
                      }`}>
                        {test.score}%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Date:</span>
                        <span className="font-medium">{new Date(test.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Score:</span>
                        <span className="font-medium">{test.correct} of {test.questions} correct</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Points earned:</span>
                        <span className="font-medium text-primary">+{test.pointsEarned}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Review Test
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {pastTests.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <p className="text-muted-foreground">You haven't taken any tests yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
