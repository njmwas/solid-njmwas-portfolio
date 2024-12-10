import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import SkillChart from "@/components/ui/skill-chart";
import { TrendingUp } from "lucide-react";
import PlayPicpazzPopup from "@/components/ui/picpazz-popup";
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
  return (
    <>

      <div className="min-h-80 md:h-96 mx-auto max-w-screen-lg flex flex-col gap-3 justify-center text-center">
        <h3 className="text-xl md:text-3xl font-black leading-normal">
          15+ Years of Building Stunning,<br />Problem-Solving Web Applications.
        </h3>
        <h6 className="text-2xl md:text-4xl font-light">Want to build something great?</h6>
        <div>
          <Link href={"https://wa.me/254712478082?text=Hi%20Let's%20build%20something%20great!"} target="_blank" 
              className={`${buttonVariants({ variant: "default", size:"lg", className:"rounded-full text-xl p-6" })}`}>Let's Chat!</Link>
          <PlayPicpazzPopup />
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto columns md:columns-3 gap-4 my-24">
        <div className="text-center m-4 md:m-0">
          <Card className="w-[100%] h-96 text-white" style={{ background: "url(/images/live-music-2219036_640.jpg)" }}>
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl font-bolder">Entertainment</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-3/5 justify-center p-4 bg-violet-950 bg-opacity-80">
              <h3 className="text-xl bg-violet-980">
                Play Youtube Videos <br /> Ad's Free With.
              </h3>
              <h2 className="text-3xl">
                <Link href="https://e-juckbox.web.app/playlist/r2az6bxRtyyQWM9dROHv" target="_blank">Jukebox Playlist</Link>
              </h2>
            </CardContent>
          </Card>
        </div>
        <div className="text-center m-4 md:m-0">
          <Card className="w-[100%] h-96 text-white" style={{ background: "url(/images/gamepad-1532528_640.jpg) center center" }}>
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl">Gaming</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-3/5 justify-center p-4 bg-slate-300 bg-opacity-20">
              <h3 className="text-xl bg-violet-980">
                Relax Your Mind <br />
                And Play With.
              </h3>
              <h2 className="text-3xl">
                <Link href="https://picpazz.com" target="_blank">Picpazz</Link>
              </h2>
            </CardContent>
          </Card>
        </div>
        <div className="text-center m-4 md:m-0">
          <Card className="w-[100%] h-96" style={{ background: "url(/images/online-store-1674907_640.png) 70% -45%" }}>
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl">Service Delivery</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-3/5 justify-center p-4 bg-cyan-100 bg-opacity-20">
              <h3 className="text-xl bg-violet-980">
                Convey Information <br /> Conviniently With.
              </h3>
              <h2 className="text-3xl">
                <Link href="https://publicnotice.co.ke/" target="_blank">Public Notice</Link>
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-24" style={{
        background: "url(/images/beach-4814418_640.jpg)",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      }}>
        <div className="min-h-96 bg-opacity-90 bg-slate-600 text-white ">
          <div className="max-w-screen-lg mx-auto py-8">
            <h3 className="text-6xl text-center">Skills</h3>
            <div className="columns md:columns-3">
              <SkillChart title="Frontend" percentage={80} color="rgb(253 186 116)">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 font-medium leading-none text-2xl">
                    Frontend <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-center leading-relaxed">
                    React &bull; JavaScript &bull; Sass <br /> Bootstarp &bull; Material
                  </div>
                </div>
              </SkillChart>
              <SkillChart title="Backend" percentage={54} color="rgb(6 182 212)">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 font-medium leading-none text-2xl">
                    Backend <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-center leading-relaxed">
                    NodeJS &bull; NextJS &bull; Python <br />
                    PHP Laravel
                  </div>
                </div>
              </SkillChart>
              <SkillChart title="Database" percentage={64} color="rgb(163 230 53)">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 font-medium leading-none text-2xl">
                    Database <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-center leading-relaxed">
                    MySQL &bull; PostgreSQL &bull; Firestore <br />
                    MSSQL
                  </div>
                </div>
              </SkillChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
