import { JobDetails } from "../../utils/types";
import Image from "next/image";
import companylogo from "../../public/assets/company-logo-placeholder.png";
import {
  BriefcaseBusiness,
  Clock,
  DollarSign,
  Earth,
  MapPin,
} from "@/utils/icons";
import { relativeDate } from "../lib/utils";
import Badge from "./Badge";
function JobItem({
  job: {
    title,
    applicationEmail,
    type,
    updatedAt,
    approved,
    createdAt,
    description,
    companyName,
    companyLogoUrl,
    applicationUrl,
    location,
    locationType,
    salary,
  },
}: JobDetails) {
  console.log(createdAt);
  return (
    <article className="flex px-2  items-center shadow-md justify-between *:gap-x-1 border border-gray-200">
      <div className="flex  items-center justify-center">
        <Image
          src={companylogo}
          alt="jobs"
          className="h-[50px] w-[50px] sm:h-[120px] sm:w-[120px]"
        />
        <div className="flex flex-col my-2">
          <div>
            <h2 className=" m-0 p-0 font-semibold text-muted-foreground text-xs  sm:text-xl">
              {title}
            </h2>
            <p className="text-muted-foreground  font-semibold text-xs sm:text-xl">
              {companyName}
            </p>
          </div>
          <div className="text-muted-foreground w-full flex flex-col mb-2 md:gap-y-2">
            <p className="flex items-center font-medium  gap-1.5 text-xs sm:text-[16px]">
              <MapPin height={15} />
              <span>{locationType}</span>
            </p>
            <p className="flex items-center font-medium  gap-1.5 text-xs sm:text-[16px] ">
              <Earth height={15} />
              <span>{location ? location : "USA"}</span>
            </p>
            <p className="flex items-center font-medium  gap-1.5 text-xs sm:text-[16px]">
              <DollarSign height={15} />
              <span>{salary}</span>
            </p>
            <p className="sm:flex items-center font-medium  gap-1.5 hidden text-xs sm:text-[16px]">
              <BriefcaseBusiness height={15} />
              <span>{type}</span>
            </p>
            <p className="sm:flex font-medium hidden items-center gap-1.5 text-xs sm:text-[16px] ">
              <Clock height={15} />
              <span>{relativeDate(createdAt)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex  flex-col gap-y-8  items-end justify-between sm:hidden">
        <Badge>{type}</Badge>
        <Badge>{relativeDate(createdAt)}</Badge>
      </div>
    </article>
  );
}

export default JobItem;
