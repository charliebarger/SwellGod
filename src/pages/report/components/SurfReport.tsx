import ProfileInfo from "components/profile/ProfileInfo"
import ProfilePic from "components/profile/ProfilePic"
import { SectionWrapper } from "components/SectionWrapper"

interface surfReportParams {
  reporter: {
    img: string
    name: string
    description: string
  }
  report: {
    report: string
    date: string
    surfConditions: {
      name: string
      color: string
    }
  }
}

const SurfReport = ({ reporter, report }: surfReportParams) => {
  return (
    <SectionWrapper>
      {/* <PageSubHeader>Fishing Report</PageSubHeader> */}
      <div className="flex gap-5">
        <ProfilePic headshot={reporter.img} />
        <ProfileInfo name={reporter.name} title={reporter.description} />
      </div>
      <div className="text-left my-4 py-2 border-y-2">
        <p className="pb-2">{report.report}</p>
        <div className="  flex flex-col justify-items-start">
          <div className=" text-sm font-semibold">
            <span>Last Updated: </span>
            <time className=" text-primaryColor " dateTime="2021-12-20">
              {report.date}
            </time>
          </div>
          <div className=" text-sm font-semibold">
            <span className=" text-sm font-bold ">Last Rating: </span>
            <span className={` text-${report.surfConditions.color}`}>
              {report.surfConditions.name}
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SurfReport
