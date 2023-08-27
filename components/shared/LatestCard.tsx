import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    image: string;
    date: string;
    slug: string;
    category: string;
    isLatest?: boolean
}

const LatestCard = ({
    image,
    title,
    description,
    date,
    slug,
    category,
    isLatest
}: Props) => {
  return (
    <main className="mt-10">
      <div className={`${isLatest ? "relative block" : 'hidden'}`}>
        <p className="text-light-2 mb-2 text-heading4-medium">The Latest</p>
        <div className="h-px bg-gray-300 rounded-lg" />
      </div>

      <div className="anamme-latestcard mt-6 px-4">
        <div className="px-3 py-3">
          <h3 className="text-primary-500 text-base-regular">
            <Link href={"/"}>{title}</Link>
          </h3>
          <div className="flex justify-between gap-2">
            <div className="title-social w-full lg:w-5/12 block ">
              <h2 className="text-light-1 text-heading2-bold">
                The mugshot that launched a thousand memes
              </h2>
              <div className="block">
                <p>
                  <Link
                    href={"/"}
                    className="hover:text-primary-500 text-subtle-medium text-gray-400"
                  >
                    Amanda Silberling
                  </Link>
                </p>
                <p className="text-primary-500 text-base-semibold">
                  11:00 PM GMT+1{" "}
                  <span>
                    <strong>•</strong>
                  </span>{" "}
                  August 25, 2023
                </p>
              </div>
            </div>
            <div className="content-social overflow-hidden w-2/6 hidden lg:block">
              <p className="text-light-2">
                Memes can happen in the blink of an eye, like a Jeopardy!
                contestant who accidentally makes a sexual innuendo under the
                pressure of stage lights, or a kid who randomly gets interviewed
                on a playgro...
              </p>
            </div>
            <div className="picture-social">
                <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="picture"
                    width={100}
                    height={100}
                    className="rounded-lg"
  
                />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestCard;
