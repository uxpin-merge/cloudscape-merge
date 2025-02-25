import * as React from 'react';
import TutorialPanel from '../TutorialPanel';

export default (
  <TutorialPanel
    uxpId="tutorial-panel-1"
    i18nStrings={{
      labelsTaskStatus: {
        pending: '',
        'in-progress': 'In Progress',
        success: 'Success',
      },
      loadingText: 'Loading',
      tutorialListTitle: 'Choose a tutorial',
      tutorialListDescription:
        'Use our walk-through tutorials to learn how to achieve your desired objectives within Amazon Transcribe.',
      tutorialListDownloadLinkText: 'Download PDF version',
      tutorialCompletedText: 'Tutorial completed',
      labelExitTutorial: 'Dismiss tutorial',
      learnMoreLinkText: 'Learn more',
      startTutorialButtonText: 'Start tutorial',
      restartTutorialButtonText: 'Restart tutorial',
      completionScreenTitle: 'Congratulations! You completed the tutorial.',
      feedbackLinkText: 'Feedback',
      dismissTutorialButtonText: 'Dismiss tutorial',
      labelLearnMoreExternalIcon: 'Opens in a new tab',
      labelTutorialListDownloadLink: 'Download PDF version of this tutorial',
      labelLearnMoreLink: 'Learn more about transcribing audio (opens new tab)',
    }}
    downloadUrl="https://example.com/my-service/all-tutorials.pdf"
    tutorials={[
      {
        title: 'Transcribe audio',
        completed: false,
        description: 'In this tutorial you will learn how to:',
        completedScreenDescription: 'You now know how to transcribe text from audio with Amazon Transcribe.',
        prerequisitesAlert: null,
        learnMoreUrl: 'https://aws.amazon.com/getting-started/hands-on/create-audio-transcript-transcribe/',
        tasks: [
          {
            title: 'Create transcription job',
            steps: [
              {
                title: 'Name your transcription job',
                content: undefined,
                hotspotId: '',
              },
              {
                title: 'Choose a language',
                content: undefined,
                hotspotId: '',
              },
              {
                title: 'Add a file',
                content: undefined,
                hotspotId: '',
              },
              {
                title: 'Create job',
                content: undefined,
                hotspotId: '',
              },
            ],
          },
          {
            title: 'View transcription details',
            steps: [
              {
                title: 'Navigate to details page',
                content: undefined,
                hotspotId: '',
              },
              {
                title: 'See preview',
                content: undefined,
                hotspotId: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Catalog audio archives',
        description: 'In this tutorial you will learn how to:',
        prerequisitesAlert: 'Transcribe audio first to complete this tutorial.',
        prerequisitesNeeded: true,
        tasks: [],
        completedScreenDescription: undefined,
        completed: false,
      },
    ]}
  />
);
