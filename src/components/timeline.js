import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
 
export default function Example() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-[#71a22f]">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
             Sports.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-[#71a22f]">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            In-house Publications
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-[#71a22f]">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            Performing Arts & Music
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
              molestiae unde, iste doloremque maxime. Eligendi libero animi
              sapiente quaerat inventore provident error.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}