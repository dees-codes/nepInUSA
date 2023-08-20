import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { School, FlightTakeoff, Group, Work, Extension, AssignmentTurnedIn } from '@mui/icons-material';

export default function OutlinedTimeline() {
  return (
    <>
      <Typography sx={{ mt: 2 }} variant="h4" align="center" gutterBottom>
        We Offer Guidance With
      </Typography>
      <Timeline position="alternate" sx={{ mt: 0 }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">College Application</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <FlightTakeoff />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Visa Interview</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <Group />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Student Life</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Work />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Internships</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <Extension />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">OPT and Jobs</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <AssignmentTurnedIn />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">H1B and GCs</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
