export const textToKeywords = (text: string): string[] => {
  if (!text) {
    return [];
  }

  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
};

export interface Transcribe {
  jobName: string;
  accountId: string;
  status: string;
  results: Result;
}

export interface Result {
  transcripts: Transcript[];
  items: Item[];
}

export interface Transcript {
  transcript: string;
}

export interface Item {
  start_time: string;
  end_time: string;
  type: string;
  alternatives: Alternative[];
}

export interface Alternative {
  confidence: string;
  content: string;
}
