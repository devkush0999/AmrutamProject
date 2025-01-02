export interface Question {
    id: number;
    user: string;
    question: string;
    likes: number;
    comments: number;
    saved: boolean;
  }
  
  export interface Thought {
    id: number;
    doctor: string;
    thought: string;
    likes: number;
  }
  