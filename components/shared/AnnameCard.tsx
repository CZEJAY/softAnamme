import Image from "next/image";
import Link from "next/link";

const AnnameCard = async () => {
  return (
    <div className="anname-card mb-6">
      <div className="anname-inner">
        <div className="anname-card-title">
          <h2 className="font-semibold">
            <Link href={"/"}>
              All hail the new EU law that lets social media users quiet quit
              the algorithm
            </Link>
          </h2>
          <div className="anname-card-subtitle">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="text-light-200 dark:text-gray-100">
                <Link href={`author/profile`} className="italic">
                  Natasha Flux
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="anname-card-content">
          <div className="anname-card-image">
            <div className="image-main">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="anname-card-image"
                width={200}
                height={150}
                className="object-fill"
              />
            </div>

            <div className="anname-text-con">
                <p className="text-gray-600 dark:text-gray-400">
                   2020-09-20
                </p>
                <p className="text-light-1 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, similique architecto! Qui accusamus tenetur dolore sint similique atque, nisi laboriosam nam eaque? Facere, praesentium laboriosam molestias eos debitis repellat? Totam.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnameCard;
