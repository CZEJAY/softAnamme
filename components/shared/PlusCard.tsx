import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  category: string;
  isLatest?: boolean;
}

const PlusCard = ({
  image,
  title,
  description,
  date,
  slug,
  category,
  isLatest,
}: Props) => {
  return (
    <main className="mt-10 items-center flex">
      <div className={`${isLatest ? "relative block" : "hidden"}`}>
        <p className="text-light-2 mb-2 text-heading4-medium">The Latest</p>
        <div className="h-px bg-gray-300 rounded-lg" />
      </div>

      <div className="anamme-latestcard relative mt-6 px-4">
        <div className="px-3 py-3">
          <h3 className="flex text-primary-500 text-heading4-medium">
            <Link href={"/"} className="flex items-center">
              AnammeTech
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-base-semibold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </h3>
          <p className="text-base-semibold text-primary-500 opacity-30">Market howw Analysis</p>
          <div className="overflow-hidden relative flex gap-32">
            <div className="title-social w-full lg:w-5/12 flex items-center flex-col justify-between">
              <h2 className="text-light-1 text-heading2-bold">
                VFX artists show that Hollywood can use AI to create, not
                exploit
              </h2>
              <div className="">
                <div className="content-social mb-9 overflow-hidden w-2/6 hidden lg:flex lg:w-full">
                  <p className="text-light-2">
                    Memes can happen in the blink of an eye, like a Jeopardy!
                    contestant who accidentally makes a sexual innuendo under
                    the pressure of stage lights, or a kid who randomly gets
                    interviewed on a playgro...
                  </p>
                </div>
                <div>
                  <div>
                    <p>
                      <Link
                        href={"/"}
                        className="hover:text-primary-500 text-subtle-medium text-gray-400"
                      >
                        Amanda Silberling
                      </Link>
                    </p>
                  </div>
                  <p className="text-primary-500 text-base-semibold">
                    11:00 PM GMT+1{" "}
                    <span>
                      <strong>•</strong>
                    </span>{" "}
                    August 25, 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 h-96 rounded-lg flex items-center origin-center">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=h-96"
                alt="picture"
                width={400}
                height={400}
                className="rounded-lg object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlusCard;
