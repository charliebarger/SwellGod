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
      <p className="text-left my-4 py-2 border-y-2">{report.report}</p>
    </SectionWrapper>
  )
}

export default SurfReport
